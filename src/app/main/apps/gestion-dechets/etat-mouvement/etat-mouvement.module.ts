import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';

import { CoreCommonModule } from '@core/common.module';
import { CoreDirectivesModule } from '@core/directives/directives';
import { CorePipesModule } from '@core/pipes/pipes.module';
import { CoreSidebarModule } from '@core/components';

import { InvoiceListService } from 'app/main/apps/invoice/invoice-list/invoice-list.service';
import { InvoiceModule } from 'app/main/apps/invoice/invoice.module';

import { CommonModule } from '@angular/common';

import { EtatMouvementListComponent } from './etat-mouvement-list/etat-mouvement-list.component';
import { EtatMouvementEditComponent } from './etat-mouvement-edit/etat-mouvement-edit.component';
import { EtatMouvementViewComponent } from './etat-mouvement-view/etat-mouvement-view.component';
import { EtatMouvementListService } from 'app/main/apps/gestion-dechets/etat-mouvement/etat-mouvement-list/etat-mouvement-list.service';

import { NewEtatMouvementSidebarComponent } from 'app/main/apps/gestion-dechets/etat-mouvement/etat-mouvement-list/new-etat-mouvement-sidebar/new-etat-mouvement-sidebar.component';
import { EtatMouvementEditService } from 'app/main/apps/gestion-dechets/etat-mouvement/etat-mouvement-edit/etat-mouvement-edit.service';
import{ EtatMouvementViewService } from 'app/main/apps/gestion-dechets/etat-mouvement/etat-mouvement-view/etat-mouvement-view.service';

import { TranslateModule } from '@ngx-translate/core';

// routing
const routes: Routes = [
  {path: 'etat-mouvement-list',component: EtatMouvementListComponent  },
  {path: 'etat-mouvement-list/etat-mouvement-edit/:id',   component: EtatMouvementEditComponent,
    resolve: {
      uls: EtatMouvementEditService
    } 
  },
  {path: 'etat-mouvement-list/etat-mouvement-view/:id',   component: EtatMouvementViewComponent,
    resolve: {
      uls: EtatMouvementViewService
    }
  },
  {path: 'etat-mouvement-list/etat-mouvement-view',  redirectTo: '/apps/etat-mouvement/etat-mouvement-list'},
  {path: 'etat-mouvement-list/etat-mouvement-edit',    redirectTo: '/apps/etat-mouvement/etat-mouvement-list' }
];

@NgModule({
  declarations: [
    EtatMouvementListComponent,NewEtatMouvementSidebarComponent,EtatMouvementEditComponent,EtatMouvementViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreCommonModule,
    FormsModule,
    NgbModule,
    NgSelectModule,
    Ng2FlatpickrModule,
    NgxDatatableModule,
    CorePipesModule,
    CoreDirectivesModule,
    InvoiceModule,
    CoreSidebarModule,
    TranslateModule
  ],
  providers: [EtatMouvementListService, EtatMouvementEditService,EtatMouvementViewService]
})
export class EtatMouvementModule { }
