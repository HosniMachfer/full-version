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

import { EtatConteneurListComponent } from './etat-conteneur-list/etat-conteneur-list.component';
import { EtatConteneurEditComponent } from './etat-conteneur-edit/etat-conteneur-edit.component';
import { EtatConteneurViewComponent } from './etat-conteneur-view/etat-conteneur-view.component';
import { EtatConteneurListService } from 'app/main/apps/gestion-dechets/etat-conteneur/etat-conteneur-list/etat-conteneur-list.service';

import { NewEtatConteneurSidebarComponent } from 'app/main/apps/gestion-dechets/etat-conteneur/etat-conteneur-list/new-etat-conteneur-sidebar/new-etat-conteneur-sidebar.component';
import { EtatConteneurEditService } from 'app/main/apps/gestion-dechets/etat-conteneur/etat-conteneur-edit/etat-conteneur-edit.service';
import{ EtatConteneurViewService } from 'app/main/apps/gestion-dechets/etat-conteneur/etat-conteneur-view/etat-conteneur-view.service';

import { TranslateModule } from '@ngx-translate/core';

// routing
const routes: Routes = [
  {path: 'etat-conteneur-list',component: EtatConteneurListComponent  },
  {path: 'etat-conteneur-list/etat-conteneur-edit/:id',   component: EtatConteneurEditComponent,
    resolve: {
      uls: EtatConteneurEditService
    } 
  },
  {path: 'etat-conteneur-list/etat-conteneur-view/:id',   component: EtatConteneurViewComponent,
    resolve: {
      uls: EtatConteneurViewService
    }
  },
  {path: 'etat-conteneur-list/etat-conteneur-view',  redirectTo: '/apps/etat-conteneur/etat-conteneur-list'},
  {path: 'etat-conteneur-list/etat-conteneur-edit',    redirectTo: '/apps/etat-conteneur/etat-conteneur-list' }
];

@NgModule({
  declarations: [
    EtatConteneurListComponent,NewEtatConteneurSidebarComponent,EtatConteneurEditComponent,EtatConteneurViewComponent
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
  providers: [EtatConteneurListService, EtatConteneurEditService,EtatConteneurViewService]
})
export class EtatConteneurModule { }
