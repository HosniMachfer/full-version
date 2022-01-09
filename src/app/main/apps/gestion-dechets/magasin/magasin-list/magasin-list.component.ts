import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';

import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';

import { CoreTranslationService } from '@core/services/translation.service';

import { MagasinListService } from 'app/main/apps/gestion-dechets/magasin/magasin-list/magasin-list.service';
import { locale as english } from 'app/main/apps/gestion-dechets/magasin/i18n/en';
import { locale as french } from 'app/main/apps/gestion-dechets/magasin/i18n/fr';
import { locale as german } from 'app/main/apps/gestion-dechets/magasin/i18n/de';
import { locale as portuguese } from 'app/main/apps/gestion-dechets/magasin/i18n/pt';


@Component({
  selector: 'app-magasin-list',
  templateUrl: './magasin-list.component.html',
  styleUrls: ['./magasin-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MagasinListComponent implements OnInit {
  
  private tempData = [];
  // Decorator
  @ViewChild(DatatableComponent) table: DatatableComponent;
  languageOptions: any;
  public selectedRole = [];
  public selectedPlan = [];
  public selectedStatus = [];
  public rows;
  public selectedOption = 10;
  public ColumnMode = ColumnMode;
  public searchValue = '';
  

 constructor(private magasinListService: MagasinListService,private _coreSidebarService: CoreSidebarService,private _coreTranslationService: CoreTranslationService) { 
 
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

    this._coreTranslationService.translate(english, french, german, portuguese);
 }
 ngOnInit(): void {
 this.magasinListService.getAll()
	      .subscribe(
	        data => {
            this.rows = data;
            this.tempData = this.rows;
            console.log(this.rows);
	        },
	        error => {
	        console.log(" ici de la merde");
	          console.log(error);
          });
}
	        
	        
toggleSidebar(name): void {
  console.log(name);
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
}

 filterUpdate(event) {
  const val = event.target.value.toLowerCase();
  console.log(val);

   // Filter Our Data
    const temp = this.tempData.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // Update The Rows
    this.rows = temp;
    // Whenever The Filter Changes, Always Go Back To The First Page
    this.table.offset = 0;

 }
}