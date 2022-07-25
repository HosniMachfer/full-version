import { Component, OnInit, OnDestroy, ViewEncapsulation, ViewChild,Injectable,ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FlatpickrOptions } from 'ng2-flatpickr';
import { cloneDeep } from 'lodash';
import { Observable } from 'rxjs';
import { FileUploader } from 'ng2-file-upload';
import { MachineListService } from 'app/main/apps/gmao/machine/machine-list/machine-list.service';
import { MachineNewService } from 'app/main/apps/gmao/machine/machine-new/machine-new.service';
import { Person, DataService } from 'app/main/forms/form-elements/select/data.service';
import { RoleListService } from 'app/main/apps/role/role-list/role-list.service';
//import {NgbDate, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import {NgbCalendar, NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
//import * as snippet from 'app/main/forms/form-elements/date-time-picker/date-time-picker.snippetcode';
import * as snippet from 'app/main/components/tabs/tabs.snippetcode';
import { ToastrService } from 'ngx-toastr';
import { MachineEditService } from 'app/main/apps/gmao/machine/machine-edit/machine-edit.service';
import { MarqueListService } from '../../marque/marque-list/marque-list.service';
import { FamilleGmaoListService } from '../../famille/famille-list/famille-list.service';
import { LocaliteListService } from '../../localite/localite-list/localite-list.service';
import { CategorieEquipementListService } from '../../categorie-equipement/categorie-equipement-list/categorie-equipement-list.service';
import { UniteGmaoListService } from '../../unite/unite-list/unite-list.service';
import { EmplacementListService } from '../../emplacement/emplacement-list/emplacement-list.service';
import { EtatMachineListService } from '../../etat-machine/etat-machine-list/etat-machine-list.service';
import { EtatActuelListService } from '../../etat-actuel/etat-actuel-list/etat-actuel-list.service';
import { environment } from 'environments/environment';
import { HttpEventType, HttpResponse } from '@angular/common/http';

interface BrandObject {
  id: number;
  text: string;
}

/**
 * This Service handles how the date is represented in scripts i.e. ngModel.
 */
@Injectable()
export class CustomAdapter extends NgbDateAdapter<string> {
  
  readonly DELIMITER = '-';

  fromModel(value: string | null): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day : parseInt(date[0], 10),
        month : parseInt(date[1], 10),
        year : parseInt(date[2], 10)
      };
    }
    return null;
  }

  toModel(date: NgbDateStruct | null): string | null {
    return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : null;
  }
}

/**
 * This Service handles how the date is rendered and parsed from keyboard i.e. in the bound input field.
 */
@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {

  readonly DELIMITER = '/';

  parse(value: string): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day : parseInt(date[0], 10),
        month : parseInt(date[1], 10),
        year : parseInt(date[2], 10)
      };
    }
    return null;
  }

  format(date: NgbDateStruct | null): string {
    return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : '';
  }
}

//file upload
//const URL = `${environment.apiUrl}`+'/diva-erp-rest-api-gmao/api/files';
const URL = 'http://localhost:8080/diva-erp-rest-api-gmao/api/files';
@Component({
  selector: 'app-machine-new',
  templateUrl: './machine-new.component.html',
  styleUrls: ['./machine-new.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter}
  ],
  encapsulation: ViewEncapsulation.None
})
export class MachineNewComponent implements OnInit, OnDestroy {
  
   // Public
  public url = this.router.url;
  public urlLastValue: string;
  public rows: any[];
  public currentRow: any;
  public tempRow: any;
  public avatarImage: string;
  public reference  ;
  public designation;
  public status;

  // snippet code variables
  public _snippetCodeBasicTab = snippet.snippetCodeBasicTab;
  public _snippetCodeIconTab = snippet.snippetCodeIconTab;
  public _snippetCodeVerticalLeftTabs = snippet.snippetCodeVerticalLeftTabs;
  public _snippetCodeVerticalRightTabs = snippet.snippetCodeVerticalRightTabs;
  public _snippetCodeFilled = snippet.snippetCodeFilled;
  public _snippetCodeJustified = snippet.snippetCodeJustified;
  public _snippetCodeCenter = snippet.snippetCodeCenter;
  public _snippetCodeEnd = snippet.snippetCodeEnd;

  public selectLocalite: any = [];
  public selectMarque: any = [];
  public selectFamille: any = [];
  public selectUnite: any = [];
  public selectEmplacement: any = [];
  public selectCategorie: any = [];
  public selectEtatActuel: any = [];
  public selectEtatMachine: any = [];
  public selectDevise: any = [];
  public numeroDeSerie : Number;
  public modele;
  public miseEnservice;
  public numDeclaration: Number;
  public prixAchat: Number;
  public carateristiqueTechnique;
  public localite = [];
  public marque = [];
  public famille = [];
  public emplacement = [];
  public unite = [];
  public categorieEquipement = [];
  public etatActuel = [];
  public etatMachine = [];
  public devise = [];



// public
uploader:FileUploader;
hasBaseDropZoneOver:boolean;
hasAnotherDropZoneOver:boolean;
response:string;

selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  fileInfos?: Observable<any>;



  @ViewChild('accountForm') accountForm: NgForm;

  public birthDateOptions: FlatpickrOptions = {
    altInput: true
  };
  // Private
  private _unsubscribeAll: Subject<any>;
  
   title = 'angular-ngselect-demo';
  laptopBrands: BrandObject[];
  selectedBrand: {};
  
  // public
  public contentHeader: object;
  // select basic
  public selectBasic: Person[] = [];
  public selectBasicLoading = false;

  // Basic Date Picker
  public basicDPdata: NgbDateStruct;

  /**
   * Constructor
   *
   * @param {DataService} dataService
   * @param {NgbModal} modalService
   */
  

  /**
   * Constructor
   *
   * @param {Router} router
   * @param {MachineNewService} _machineNewService
   */
  constructor(private router: Router, private _machineNewService: MachineNewService,
    private dataService: DataService, private modalService: NgbModal,
    private _roleListService: RoleListService ,private ngbCalendar: NgbCalendar,
    private dateAdapter: NgbDateAdapter<string>,private machineListService: MachineListService,
    private _toastrService: ToastrService,private _machineEditService: MachineEditService,private localiteListService: LocaliteListService,
    private marqueListService: MarqueListService,private familleGmaoListService: FamilleGmaoListService,
    private uniteGmaoListService: UniteGmaoListService,private categorieListService: CategorieEquipementListService,
    private emplacmentListService: EmplacementListService,private etatMachineListService: EtatMachineListService,
    private etatActuelListService: EtatActuelListService) {
    this._unsubscribeAll = new Subject();
    this.urlLastValue = this.url.substr(this.url.lastIndexOf('/') + 1); 




    this.uploader = new FileUploader({
      url: URL,
      itemAlias: 'image',
      authToken: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBkZW1vLmNvbSIsImlhdCI6MTY0ODU4NDgzMiwiZXhwIjoxNjQ4NjcxMjMyfQ.NsyirUo_sn_VqykJNtQKZmLqYaq1-Xj5Qg-WaLofpsw9LlXjzb7lgA2zYAsai1sdtfoeeIWDapv1eIRa03GofQ', 
      //authToken: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBkZW1vLmNvbSIsImlhdCI6MTY0NzkzNjY5NCwiZXhwIjoxNjQ4MDIzMDk0fQ.V3h4ptq_4rUlWGEwH5mJhnoE4jjfNEqjIiiJC_OdS4eb6fh-jE1L-H1DsyoPU0vK6p1UHVfeFNM8-DFOTBdK4w",
      headers: [{ name: 'Content-Type', value: 'multipart/form-data' }],
      disableMultipart: true, // 'DisableMultipart' must be 'true' for formatDataFunction to be called.
      formatDataFunctionIsAsync: true,
      formatDataFunction: async (item) => {
        return new Promise( (resolve, reject) => {
          resolve({
            name: item._file.name,
            length: item._file.size,
            contentType: item._file.type,
            date: new Date()
          });
        });
      }
    });


    /*this.uploader = new FileUploader({
      url: URL,
      headers: [{ name: 'Autenfication', value: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1YTIzNDBkOWE0MDM5YTI2MGM1OWYzNTMiLCJleHAiOjE1MTUyMjc5NDcyMzV9.uVpwN9vrjpoKOzNN_DYOgonB1N46Pl' }]
    });*/
    

    /*this.uploader = new FileUploader({ url: URL , 
      headers: [{ name: 'Authorization', value: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1YTIzNDBkOWE0MDM5YTI2MGM1OWYzNTMiLCJleHAiOjE1MTUyMjc5NDcyMzV9.uVpwN9vrjpoKOzNN_DYOgonB1N46Pl' }],
      authToken: "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1YTIzNDBkOWE0MDM5YTI2MGM1OWYzNTMiLCJleHAiOjE1MTUyMjc5NDcyMzV9.uVpwN9vrjpoKOzNN_DYOgonB1N46Pl"
    });*/
    /*
    this.uploader = new FileUploader({
      url: URL, 
      disableMultipart: true,
      autoUpload: true,
      isHTML5: true,
      authToken: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBkZW1vLmNvbSIsImlhdCI6MTY0ODMzMDIzMCwiZXhwIjoxNjQ4NDE2NjMwfQ.mu91Gsi3JYHcDDA5-h8sxNrO9-cHqtPYkdACiUU4udb_1rbn-P6dyJrFYzfOZIZlWABYcjXD8CZwk342e4PZPw', 

      // add custom header
      headers: [{ name: 'loooooooooooooool', value : 'liiiiiiiiiiiiiiiiil'},
      {name:'Access-Control-Request-Headers', value : ' authorization,content-type,loooooooooooooool'}
    ]
    });
    */


    
 
    this.hasBaseDropZoneOver = false;
    this.hasAnotherDropZoneOver = false;
 
    this.response = '';
    console.log("**********************************");
    this.uploader.response.subscribe( res => this.response = res );

  }


  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }
  upload(): void {
    this.progress = 0;
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.currentFile = file;
        this._machineNewService.upload(this.currentFile).subscribe(
          (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
             
              console.log(event.body);
             
              //this.message = event.body.message;
              //this.fileInfos = this._machineNewService.getFiles();
            }
          },
          (err: any) => {
            console.log(err);
            this.progress = 0;
            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the file!';
            }
            this.currentFile = undefined;
          });
      }
      this.selectedFiles = undefined;
    }
  }


  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
 
  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }
  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Reset Form With Default Values
   */
  resetFormWithDefaultValues() {
    this.accountForm.resetForm(this.tempRow);
  }

  /**
   * Submit
   *
   * @param form
   */
   submit(form) {
    
    console.log("------------------------------------------");
    console.log(form.value);
    console.log("------------------------------------------");
    if (form.valid) {
      console.log("--------------------v  a-----------------");
      debugger
      const tempDateAchat = form.value.dateAchat.split("-");
      const tempDateMes = form.value.miseEnservice.split("-");
      form.value.dateAchat = tempDateAchat[2] + "-" + tempDateAchat[1] + "-" + tempDateAchat[0];
      form.value.miseEnservice = tempDateMes[2] + "-" + tempDateMes[1] + "-" + tempDateMes[0];
      this._machineEditService.create(form.value)
    .subscribe(
      response => {
        this._toastrService.success("L'ajout d'un nouveau privil�ge avec success", "");
        this.router.navigate(['apps/gmao/machine/machine-list/']);
      },
      error => {
        this._toastrService.error("Impossible d'ajouter un noueau pribil�ge", "");
        console.log(error);
      });
    }
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit(): void {
    this._machineNewService.onMachineNewChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
            this.rows = response;
            this.rows.map(row => {
        if (row.id == this.urlLastValue) {
          this.currentRow = row;
          this.currentRow.avatar;
          this.tempRow = cloneDeep(row);
        }
      });
    });
    this.localiteListService.getAll()
    .subscribe(
      data => {
        this.selectLocalite = data;
      },
      error => {
        console.log(error);
    });
    this.marqueListService.getAll()
      .subscribe(
        data => {
          this.selectMarque = data;
        },
        error => {
          console.log(error);
    });
    this.familleGmaoListService.getAll()
      .subscribe(
        data => {
          this.selectFamille = data;
        },
        error => {
          console.log(error);
    });
    this.categorieListService.getAll()
      .subscribe(
        data => {
          this.selectCategorie = data;
        },
        error => {
          console.log(error);
    });
    this.uniteGmaoListService.getAll()
    .subscribe(
      data => {
        this.selectUnite = data;
      },
      error => {
        console.log(error);
    });
    this.emplacmentListService.getAll()
    .subscribe(
      data => {
        this.selectEmplacement = data;
      },
      error => {
        console.log(error);
    });
    this.etatActuelListService.getAll()
    .subscribe(
      data => {
        this.selectEtatActuel = data;
      },
      error => {
        console.log(error);
    });
    this.etatMachineListService.getAll()
    .subscribe(
      data => {
        this.selectEtatMachine = data;
      },
      error => {
        console.log(error);
    });
    this.etatMachineListService.getDevise()
    .subscribe(
      data => {
        this.selectDevise = data;
      },
      error => {
        console.log(error);
    });



    //Upload file 
    this.uploader.onCompleteItem = (item: any, status: any) => {
      console.log('Uploaded File Details:', item);
      this._toastrService.success('File successfully uploaded!');
    };
    this.uploader.onAfterAddingFile = (file) => {
      console.log("TAAAAAAAAAAAAAAAAAAAAAAA MER !!!!! ",);
      file.withCredentials = false;
    };
  }

  doTextareaValueChange(ev) {
    try {
      this.currentRow.description  = ev.target.value;
    } catch(e) {
      console.info('could not set textarea-value');
    }
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
