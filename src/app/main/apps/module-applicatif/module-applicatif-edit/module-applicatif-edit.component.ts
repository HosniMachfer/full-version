import { Component, OnInit, OnDestroy, ViewEncapsulation, ViewChild,Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FlatpickrOptions } from 'ng2-flatpickr';
import { cloneDeep } from 'lodash';
import { Observable } from 'rxjs';

import { RoleListService } from 'app/main/apps/role/role-list/role-list.service';
import { ModuleApplicatifEditService } from 'app/main/apps/module-applicatif/module-applicatif-edit/module-applicatif-edit.service';
import { Person, DataService } from 'app/main/forms/form-elements/select/data.service';
import { ModuleApplicatifListService } from 'app/main/apps/module-applicatif/module-applicatif-list/module-applicatif-list.service';
import { NgbDate, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbCalendar, NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import * as snippet from 'app/main/forms/form-elements/date-time-picker/date-time-picker.snippetcode';
import { ToastrService } from 'ngx-toastr';

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
  selector: 'app-module-applicatif-edit',
  templateUrl: './module-applicatif-edit.component.html',
  styleUrls: ['./module-applicatif-edit.component.scss'],
  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter}
  ],
  encapsulation: ViewEncapsulation.None
})
export class ModuleApplicatifEditComponent implements OnInit, OnDestroy {
  
   // Public
  public url = this.router.url;
  public urlLastValue: string;
  public rows: any[];
  public currentRow: any;
  public tempRow: any;
  public avatarImage: string;
  public roles = [];
  public select_roles = [];
  
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
   * @param {ModuleApplicatifEditService} _moduleAapplicatifEditService
   */
  constructor(private router: Router, private _moduleApplicatifEditService: ModuleApplicatifEditService,
    private dataService: DataService, private modalService: NgbModal,
    private _moduleApplicatifListService: ModuleApplicatifListService ,private ngbCalendar: NgbCalendar,
    private dateAdapter: NgbDateAdapter<string>,   private _toastrService: ToastrService, 
    private _roleListService: RoleListService) {
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
      this._moduleApplicatifEditService.create(this.currentRow)
      .subscribe(
        response => {
          this._toastrService.success('Mise à jour privileg avec success', '');
          this.router.navigate(['apps/module-applicatif/module-applicatif-list']);
        },
        error => {
          this._toastrService.error('Impossible de mettre à jour pribilége', error);
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
    this._moduleApplicatifEditService.onModuleApplicatifEditChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
            this.rows = response;
            this.rows.map(row => {
        if (row.id == this.urlLastValue) {
          this.currentRow = row;
          console.log("..............");
           console.log(this.currentRow);
           console.log("..............");
          this.tempRow = cloneDeep(row);
        }
      });
    });

    this._roleListService.getAll()
      .subscribe(
        data => {
          this.roles = data;
        },
        error => {
        console.log(" ici de la merde");
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
}
