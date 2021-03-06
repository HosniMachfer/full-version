import { Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
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
import { FamilleGmaoListService } from '../../famille/famille-list/famille-list.service';
import { CategorieEquipementListService } from '../../categorie-equipement/categorie-equipement-list/categorie-equipement-list.service';
import { EtatMachineListService } from '../../etat-machine/etat-machine-list/etat-machine-list.service';
import { EtatActuelListService } from '../../etat-actuel/etat-actuel-list/etat-actuel-list.service';
import { Route, Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
  <h4 class="modal-title">Alert</h4>
  <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
</div>
<div class="modal-body">
  <p>Voulez vous vraiment supprimer ?</p>
</div>
<div class="modal-footer">
  <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Non</button>
  <button type="button" class="btn btn-outline-dark" (click)="delete(rowId)">Oui</button>
</div>
  `
})
export class NgbdModalContents {

  @Input() rowId;

  constructor(public activeModal: NgbActiveModal, private machineListService: MachineListService) {}

  delete(id: number) {
    this.machineListService.delete(id).subscribe(
      () => {
        this.machineListService.getAll()
          .subscribe(
            data => window.location.reload());
      }
    );
  }
}

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
public previousFamilleFilter = '';
public previousCategorieFilter = '';

public selectLocalite: any = [];
public selectMarque: any = [];
public selectFamille: any = [];
public selectCategorie: any = [];
public selectEtatActuel: any = [];
public selectEtatMachine: any = [];

public selectedLocalite = [];
public selectedMarque = [];
public selectedFamille = [];
public selectedCategorie = [];
public selectedEtatActuel = [];
public selectedEtatMachine = [];

public searchReference = '';
public searchDesigniation = '';
public searchModele = '';
  

 constructor(private machineListService: MachineListService,private _coreSidebarService: CoreSidebarService,
             private _coreTranslationService: CoreTranslationService,private localiteListService: LocaliteListService,
             private marqueListService: MarqueListService,private familleGmaoListService: FamilleGmaoListService,
             private categorieListService: CategorieEquipementListService,private etatMachineListService: EtatMachineListService,
             private etatActuelListService: EtatActuelListService, private router: Router, private modalService: NgbModal) { 
 
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
          console.log(" list service MACHINNNNE");

        },
        error => {
          console.log(error);
          console.log("error list service");

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
  filterRows(localiteFilter, marqueFilter,familleFilter,categorieFilter): any[] {
  // Reset search on select change
  this.searchReference = '';
  this.searchDesigniation = '';
  this.searchModele ='';

    localiteFilter = localiteFilter.toLowerCase();
    marqueFilter = marqueFilter.toLowerCase();
    familleFilter = familleFilter.toLowerCase();
    categorieFilter = categorieFilter.toLowerCase();

    return this.tempData.filter(row => {     
    
      const isPartialLocaliteMatch = row.localite?.code.toLowerCase().indexOf(localiteFilter) !== -1 || !localiteFilter;
      const isPartialMarqueMatch = row.marque?.code.toLowerCase().indexOf(marqueFilter) !== -1 || !marqueFilter;
      const isPartialFamilleMatch = row.famille?.code.toLowerCase().indexOf(familleFilter) !== -1 || !familleFilter;
      const isPartialCategorieMatch = row.categorieEquipement?.code.toLowerCase().indexOf(categorieFilter) !== -1 || !categorieFilter;
      return isPartialLocaliteMatch && isPartialMarqueMatch && isPartialFamilleMatch && isPartialCategorieMatch;
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
    this.temp = this.filterRows(this.previousLocaliteFilter,  filter,this.previousFamilleFilter,this.previousCategorieFilter);
    this.rows = this.temp;
  }
  /**
   * Filter By localite
   *
   * @param event
   */
    filterByLocalite(event) {
    const filter = event ? event.code : '';
    this.previousLocaliteFilter = filter;
    this.temp = this.filterRows(filter, this.previousMarqueFilter,this.previousFamilleFilter,this.previousCategorieFilter);
    this.rows = this.temp;
  }
  /**
   * Filter By famille
  *
  * @param event
  */
  filterByFamille(event) {
    const filter = event ? event.code : '';
    this.previousFamilleFilter = filter;
    this.temp = this.filterRows(this.previousLocaliteFilter, this.previousMarqueFilter,filter,this.previousCategorieFilter);
    this.rows = this.temp;
  }
    
    /**
     * Filter By cat??gorie
    *
    * @param event
    */
      filterByCategorie(event) {
      const filter = event ? event.code : '';
      this.previousCategorieFilter = filter;
      this.temp = this.filterRows(this.previousLocaliteFilter, this.previousMarqueFilter,this.previousFamilleFilter,filter);
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

 update(id :number) {
  this.router.navigateByUrl('/apps/gmao/machine/machine-list/machine-edit/' + id);
}

open(id :number) {
  const modalRef = this.modalService.open(NgbdModalContents);
  modalRef.componentInstance.rowId = id;
}
}
