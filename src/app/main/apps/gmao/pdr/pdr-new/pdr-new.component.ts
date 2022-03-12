import { Component, OnInit, OnDestroy, ViewEncapsulation, ViewChild,Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FlatpickrOptions } from 'ng2-flatpickr';
import { cloneDeep } from 'lodash';
import { Observable } from 'rxjs';
import { PDRListService } from 'app/main/apps/gmao/pdr/pdr-list/pdr-list.service';
import { PDRNewService } from 'app/main/apps/gmao/pdr/pdr-new/pdr-new.service';
import { Person, DataService } from 'app/main/forms/form-elements/select/data.service';
import { RoleListService } from 'app/main/apps/role/role-list/role-list.service';
//import {NgbDate, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import {NgbCalendar, NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
//import * as snippet from 'app/main/forms/form-elements/date-time-picker/date-time-picker.snippetcode';
import * as snippet from 'app/main/components/tabs/tabs.snippetcode';
import { ToastrService } from 'ngx-toastr';
import { PDREditService } from 'app/main/apps/gmao/pdr/pdr-edit/pdr-edit.service';
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


@Component({
  selector: 'app-pdr-new',
  templateUrl: './pdr-new.component.html',
  styleUrls: ['./pdr-new.component.scss'],
  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter}
  ],
  encapsulation: ViewEncapsulation.None
})
export class PDRNewComponent implements OnInit, OnDestroy {
  
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
   * @param {PDRNewService} _pdrNewService
   */
  constructor(private router: Router, private _pdrNewService: PDRNewService,
    private dataService: DataService, private modalService: NgbModal,
    private _roleListService: RoleListService ,private ngbCalendar: NgbCalendar,
    private dateAdapter: NgbDateAdapter<string>,private pdrListService: PDRListService,
    private _toastrService: ToastrService,private _pdrEditService: PDREditService,) {
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
   submit(form) {
    if (form.valid) {
      this._pdrEditService.create(form.value)
    .subscribe(
      response => {
        this._toastrService.success("L'ajout d'un nouveau privil�ge avec success", "");
        this.router.navigate(['apps/gmao/pdr/pdr-list/pdr-view/'+response.id]);
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
    this._pdrNewService.onPDRNewChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
            this.rows = response;
            this.rows.map(row => {
        if (row.id == this.urlLastValue) {
          this.currentRow = row;
          this.currentRow.avatar;
          this.tempRow = cloneDeep(row);
        }
      });
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
}
