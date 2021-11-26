import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';

import { RoleListService } from 'app/main/apps/role/role-list/role-list.service';

import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';

import { CoreTranslationService } from '@core/services/translation.service';

import { locale as english } from 'app/main/apps/role/i18n/en';
import { locale as french } from 'app/main/apps/role/i18n/fr';
import { locale as german } from 'app/main/apps/role/i18n/de';
import { locale as portuguese } from 'app/main/apps/role/i18n/pt';


@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RoleListComponent implements OnInit {
  languageOptions: any;
  public selectedRole = [];
  public selectedPlan = [];
  public selectedStatus = [];
  public rows;
  public selectedOption = 10;
  public ColumnMode = ColumnMode;
  public searchValue = '';
  
   public selectStatus: any = [
    { name: 'All', value: '' },
    { name: 'Pending', value: 'Pending' },
    { name: 'Active', value: 'Active' },
    { name: 'Inactive', value: 'Inactive' }
  ];
    public selectRole: any = [
    { name: 'All', value: '' },
    { name: 'Admin', value: 'Admin' },
    { name: 'Author', value: 'Author' },
    { name: 'Editor', value: 'Editor' },
    { name: 'Maintainer', value: 'Maintainer' },
    { name: 'Subscriber', value: 'Subscriber' }
  ];

  public selectPlan: any = [
    { name: 'All', value: '' },
    { name: 'Basic', value: 'Basic' },
    { name: 'Company', value: 'Company' },
    { name: 'Enterprise', value: 'Enterprise' },
    { name: 'Team', value: 'Team' }
  ];
  
constructor(private roleListService: RoleListService,private _coreSidebarService: CoreSidebarService,private _coreTranslationService: CoreTranslationService) {

    this.languageOptions = {
      en: {
        title: 'English',
        flag: 'us'
      },
      fr: {
        title: 'French',
        flag: 'fr'
      },
      de: {
        title: 'German',
        flag: 'de'
      },
      pt: {
        title: 'Portuguese',
        flag: 'pt'
      }
    };

    this._coreTranslationService.translate(english, french, german, portuguese); }

ngOnInit(): void {

	this.roleListService.getAll()
	      .subscribe(
	        data => {
	          this.rows = data;
	        },
	        error => {
	        console.log(" ici de la merde");
	          console.log(error);
	        });

}
  
  
toggleSidebar(name): void {
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
}
  
filterUpdate(event) {}
filterByStatus(event) {}
filterByRole(event) {}
filterByPlan(event) {}
}
