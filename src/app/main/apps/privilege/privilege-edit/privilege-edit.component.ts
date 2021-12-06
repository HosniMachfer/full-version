import { Component, OnInit, OnDestroy, ViewEncapsulation, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FlatpickrOptions } from 'ng2-flatpickr';
import { cloneDeep } from 'lodash';

import { Observable } from 'rxjs';

import { PrivilegeEditService } from 'app/main/apps/privilege/privilege-edit/privilege-edit.service';
import { Person, DataService } from 'app/main/forms/form-elements/select/data.service';
import { RoleListService } from 'app/main/apps/role/role-list/role-list.service';

import { NgbDateStruct, NgbCalendar, NgbDate, NgbDateParserFormatter, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

import * as snippet from 'app/main/forms/form-elements/date-time-picker/date-time-picker.snippetcode';


interface BrandObject {
  id: number;
  text: string;
}

@Component({
  selector: 'app-privilege-edit',
  templateUrl: './privilege-edit.component.html',
  styleUrls: ['./privilege-edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PrivilegeEditComponent implements OnInit, OnDestroy {
  // Public
  public url = this.router.url;
  public urlLastValue: string;
  public rows: any[];
  public currentRow: any;
  public tempRow: any;
  public avatarImage: string;
  
  // Basic Date Picker
  public basicDPdata: NgbDateStruct;


  // Select Custom header footer template
  public listetRoles =[];
  public roles = [];
  public selectedRoles = [];
  
  @ViewChild('accountForm') accountForm: NgForm;

  public birthDateOptions: FlatpickrOptions = {
    altInput: true
  };

  public selectMultiLanguages = ['English', 'Spanish', 'French', 'Russian', 'German', 'Arabic', 'Sanskrit'];
  public selectMultiLanguagesSelected = [];

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

  // select group
  public selectGroupselected = 'Adam';
  public selectGroup = [
    {
      name: 'Adam',
      country: 'United States'
    },
    {
      name: 'Homer',
      country: ''
    },
    {
      name: 'Samantha',
      country: 'United States'
    },
    {
      name: 'Amalie',
      country: 'Argentina'
    },
    {
      name: 'Estefanía',
      country: 'Argentina'
    },
    {
      name: 'Adrian',
      country: 'Ecuador'
    },
    {
      name: 'Wladimir',
      country: 'Ecuador'
    },
    {
      name: 'Natasha',
      country: 'Ecuador'
    },
    {
      name: 'Nicole',
      country: 'Colombia'
    },
    {
      name: 'Michael',
      country: 'Colombia'
    },
    {
      name: 'Nicolás',
      country: 'Colombia'
    }
  ];

  // select icon
  public selectIcon = [
    {
      id: 1,
      name: 'Chrome',
      icon: 'fa fa-chrome'
    },
    {
      id: 2,
      name: 'Firefox',
      icon: 'fa fa-firefox'
    },
    {
      id: 3,
      name: 'Safari',
      icon: 'fa fa-safari'
    },
    {
      id: 4,
      name: 'Opera',
      icon: 'fa fa-opera'
    }
  ];
  public selectIconSelected = this.selectIcon[0].name;

  // select custom option
  public selectCustomSelected = this.selectIcon[0].name;

  // select tag
  public SelectTag: any;

  // Select Custom Tag
  public customTagselected: any;
  public customTag: any[] = [];
  public customTagNames = ['Uber', 'Microsoft', 'Flexigen'];

  // select Basic Multi
  public selectMulti: Observable<any[]>;
  public selectMultiSelected = [{ name: 'Karyn Wright' }];

  // Select Multi with group
  public selectMultiGroupSelected = [{ name: 'Karyn Wright' }];

  // Select Multi with Icon
  public multiIconGithubUsers: Observable<any[]>;
  public multiIconGithubUsersSelected = ['anjmao'];

  // Select Multi Custom
  public multiCustomGithubUsersSelected = ['anjmao'];

  // select with limited number of selections
  public selectMultiLimitedSelected = [{ name: 'Karyn Wright' }];

  // Select Custom header footer template
  public selectCustomHeaderFooter = [];
  public selectCustomHeaderFooterSelected = [];

  // select size
  public SelectSizeLargeSelected = 'Adam';
  public SelectSizeDefaultSelected = 'Adam';
  public SelectSizeSmallSelected = 'Adam';

  // multiple sizes
  public MultiLarge: Observable<any[]>;
  public MultiLargeSelected = [{ name: 'Karyn Wright' }];

  public MultiDefault: Observable<any[]>;
  public MultiDefaultSelected = [{ name: 'Karyn Wright' }];

  public MultiSmall: Observable<any[]>;
  public MultiSmallSelected = [{ name: 'Karyn Wright' }];

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
   * @param {PrivilegeEditService} _privilegeEditService
   */
  constructor(private router: Router, private _privilegeEditService: PrivilegeEditService,private dataService: DataService, private modalService: NgbModal,
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
   * Upload Image
   *
   * @param event
   */
  uploadImage(event: any) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();

      reader.onload = (event: any) => {
        //this.avatarImage = event.target.result;
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  /**
   * Submit
   *
   * @param form
   */
  submit(form: { valid: any; }) {
    if (form.valid) {
      
      this._privilegeEditService.create(this.currentRow)
      .subscribe(
        response => {
         //this.router.navigate(['/privileges']);
        },
        error => {
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
    console.log("ngOnInitngOnInitngOnInitngOnInitngOnInit");
    this._privilegeEditService.onPrivilegeEditChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
            this.rows = response;
            this.rows.map(row => {
        if (row.id == this.urlLastValue) {
          this.currentRow = row;
          console.log("------------------");
          console.log(this.currentRow);
          console.log("------------------");
          this.selectedRoles = row.roles;
          console.log("::::::::::::::::::");
          console.log(row.dateCre);
          console.log("::::::::::::::::::");
          this.basicDPdata = {  "year": 2021,  "month": 12,  "day": 11};
          this.currentRow.avatar;
          this.tempRow = cloneDeep(row);
        }
      });
    });
    
    
      this.listetRoles = [
    {
      id: '1',
      name: 'Admin'
    },
        {
      id: '2',
      name: 'Editor'
    },
    {
      id: '3',
      name: 'Author'
    },
    {
      id: '4',
      name: 'Maintainer'
    },
    {
      id: '5',
      name: 'Subscriber'
    }
  ];
    
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

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

}
