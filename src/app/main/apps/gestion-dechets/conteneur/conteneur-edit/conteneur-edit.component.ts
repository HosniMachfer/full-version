import { Component, OnInit, OnDestroy, ViewEncapsulation, ViewChild,Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FlatpickrOptions } from 'ng2-flatpickr';
import { cloneDeep } from 'lodash';
import { Observable } from 'rxjs';
import { Person, DataService } from 'app/main/forms/form-elements/select/data.service';
import { RoleListService } from 'app/main/apps/role/role-list/role-list.service';
import {NgbDate, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import {NgbCalendar, NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import * as snippet from 'app/main/forms/form-elements/date-time-picker/date-time-picker.snippetcode';
import { ToastrService } from 'ngx-toastr';
import { DechetListService } from 'app/main/apps/gestion-dechets/dechet/dechet-list/dechet-list.service';
import { EtatConteneurListService } from 'app/main/apps/gestion-dechets/etat-conteneur/etat-conteneur-list/etat-conteneur-list.service';
import { ConteneurListService } from 'app/main/apps/gestion-dechets/conteneur/conteneur-list/conteneur-list.service';
import { ConteneurEditService } from 'app/main/apps/gestion-dechets/conteneur/conteneur-edit/conteneur-edit.service';
import { MagasinListService } from 'app/main/apps/gestion-dechets/magasin/magasin-list/magasin-list.service';
import { UniteListService } from 'app/main/apps/gestion-dechets/unite/unite-list/unite-list.service';
interface BrandObject {
  id: number;
  text: string;
}
import Stepper from 'bs-stepper';
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


@Component({
  selector: 'app-conteneur-edit',
  templateUrl: './conteneur-edit.component.html',
  styleUrls: ['./conteneur-edit.component.scss'],
  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter}
  ],
  encapsulation: ViewEncapsulation.None
})
export class ConteneurEditComponent implements OnInit, OnDestroy {
  
    // public
  public TDNameVar;
  public TDEmailVar;
  public TDFirstNameVar;
  public TDLastNameVar;
  public twitterVar;
  public facebookVar;
  public googleVar;
  public linkedinVar;
  public landmarkVar;
  public addressVar;
  
  
   // Public
  public url = this.router.url;
  public urlLastValue: string;
  public rows: any[];
  public currentRow: any;
  public tempRow: any;
  public avatarImage: string;
  public dechets = [];
  public etatConteneurs;
  public unites = [];
  public magasins = [];
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
   * @param {ConteneurEditService} _conteneurEditService
   */
  constructor(private router: Router, private _conteneurEditService: ConteneurEditService,
    private dataService: DataService, private modalService: NgbModal,
    private _roleListService: RoleListService ,private ngbCalendar: NgbCalendar,
    private dateAdapter: NgbDateAdapter<string>,private conteneurListService: ConteneurListService,
    private _toastrService: ToastrService,private dechetListService: DechetListService,
    private etatConteneurListService: EtatConteneurListService,private magasinListService: MagasinListService,
    private uniteListService: UniteListService) {
    this._unsubscribeAll = new Subject();
    this.urlLastValue = this.url.substr(this.url.lastIndexOf('/') + 1);
    
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
  submit(form: { valid: any; }) {
    if (form.valid) {
      this._conteneurEditService.create(this.currentRow)
      .subscribe(
        response => {
          this._toastrService.success('Mise ? jour privileg avec success', '');
          this.router.navigate(['apps/gestion-dechets/conteneur/conteneur-list']);
        },
        error => {
          this._toastrService.error('Impossible de mettre ? jour pribil?ge', error);
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

  
    this._conteneurEditService.onConteneurEditChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
            this.rows = response;
            this.rows.map(row => {
        if (row.id == this.urlLastValue) {
          this.currentRow = row;
          this.currentRow.avatar;
          this.tempRow = cloneDeep(row);
        }
      });
    });
    
    // r?cuperer liste des d?chets 
  	this.dechetListService.getAll()
      .subscribe(
        data => {
        this.dechets = data;
        },
        error => {
          console.log(error);
      });
     // r?cuperer liste des ?tats conteneur 
     this.etatConteneurListService.getAll()
      .subscribe(
        data => {
        this.etatConteneurs = data;
        },
        error => {
          console.log(error);
     });
     // r?cuperer liste des unit?s
    this.uniteListService.getAll()
	    .subscribe(
	      data => {
          this.unites = data;
	      },
	      error => {
	        console.log(error);
      });
      // r?cuperer liste des magasins
    this.magasinListService.getAll()
      .subscribe(
        data => {
        this.magasins = data;
        },
        error => {
          console.log(error);
      });
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

  /**
   * On Submit
   */
  onSubmit() {
    alert('Submitted!!');
    return false;
  }
  
  
  
}
