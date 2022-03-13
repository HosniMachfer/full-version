import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { LocaliteListService } from 'app/main/apps/gmao/localite/localite-list/localite-list.service';
import { MarqueListService } from 'app/main/apps/gmao/marque/marque-list/marque-list.service';
import { MachineListService } from 'app/main/apps/gmao/machine/machine-list/machine-list.service';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { CoreTranslationService } from '@core/services/translation.service';
import { locale as english } from 'app/main/apps/gmao/machine/i18n/en';
import { locale as french } from 'app/main/apps/gmao/machine/i18n/fr';
import { locale as german } from 'app/main/apps/gmao/machine/i18n/de';
import { locale as portuguese } from 'app/main/apps/gmao/machine/i18n/pt';


@Component({
  selector: 'app-machine-list',
  templateUrl: './machine-list.component.html',
  styleUrls: ['./machine-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MachineListComponent implements OnInit {
  
  private tempData = [];
  // Decorator
  @ViewChild(DatatableComponent) table: DatatableComponent;
  languageOptions: any;
  public rows;
  public selectedOption = 10;
  public ColumnMode = ColumnMode;
  
// Filtre
public temp = [];
public previousLocaliteFilter = '';
public previousMarqueFilter = '';
public selectLocalite: any = [];
public selectMarque: any = [];
public selectEtatActuel: any = [
  { id: 0, code: 'En Arrêt' },
  { id: 1, code: 'En Marche' }
];
public selectEtat: any = [
  { id: 0, code: 'Inactif' },
  { id: 1, code: 'Actif' }
];

public selectedLocalite = [];
public selectedMarque = [];
public selectedEtatActuel = [];
public selectedEtat = [];

public searchReference = '';
public searchDesigniation = '';
public searchModele = '';
  

 constructor(private machineListService: MachineListService,private _coreSidebarService: CoreSidebarService,
             private _coreTranslationService: CoreTranslationService,private localiteListService: LocaliteListService,
             private marqueListService: MarqueListService) { 
 
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
 this.machineListService.getAll()
	      .subscribe(
	        data => {
            this.rows = data;
            this.tempData = this.rows;
            console.log(this.rows);
	        },
	        error => {
	          console.log(error);
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
}
	        
	        
toggleSidebar(name): void {
  console.log(name);
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
}


  /**
   * Filter Rows
   *
   * @param localiteFilter
   * @param marqueFilter
   */
   filterRows(localiteFilter, marqueFilter): any[] {
    // Reset search on select change
    this.searchReference = '';
    this.searchDesigniation = '';
    this.searchModele ='';

    localiteFilter = localiteFilter.toLowerCase();
    marqueFilter = marqueFilter.toLowerCase();

    return this.tempData.filter(row => {      
      const isPartialLocaliteMatch = row.localite.code.toLowerCase().indexOf(localiteFilter) !== -1 || !localiteFilter;
      const isPartialMarqueMatch = row.marque.code.toLowerCase().indexOf(marqueFilter) !== -1 || !marqueFilter;
      return isPartialLocaliteMatch && isPartialMarqueMatch;
    });
  }
  /**
   * Filter By Marque
   *
   * @param event
   */
   filterByMarque(event) {
    const filter = event ? event.code : '';
    this.previousMarqueFilter = filter;
    this.temp = this.filterRows(this.previousLocaliteFilter,  filter);
    this.rows = this.temp;
  }
    /**
   * Filter By Roles
   *
   * @param event
   */
     filterByLocalite(event) {
      const filter = event ? event.code : '';
      this.previousLocaliteFilter = filter;
      this.temp = this.filterRows(filter, this.previousMarqueFilter);
      this.rows = this.temp;
    }
  


 filterByReference(event) {
  const val = event.target.value.toLowerCase();
  // Filter Our Data
  const temp = this.tempData.filter(function (d) {
    return d.reference.toLowerCase().indexOf(val) !== -1 || !val;
  });
  // Update The Rows
  this.rows = temp;
  // Whenever The Filter Changes, Always Go Back To The First Page
  this.table.offset = 0;
 }

 filterByDesignation(event) {
  const val = event.target.value.toLowerCase();
  // Filter Our Data
  const temp = this.tempData.filter(function (d) {
    return d.designation.toLowerCase().indexOf(val) !== -1 || !val;
  });
  // Update The Rows
  this.rows = temp;
  // Whenever The Filter Changes, Always Go Back To The First Page
  this.table.offset = 0;
 }

 filterByModele(event) {
  const val = event.target.value.toLowerCase();
  // Filter Our Data
  const temp = this.tempData.filter(function (d) {
    return d.modele.toLowerCase().indexOf(val) !== -1 || !val;
  });
  // Update The Rows
  this.rows = temp;
  // Whenever The Filter Changes, Always Go Back To The First Page
  this.table.offset = 0;
 }
}
