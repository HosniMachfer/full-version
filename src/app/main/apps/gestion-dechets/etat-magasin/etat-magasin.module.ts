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

import { EtatMagasinListComponent } from './etat-magasin-list/etat-magasin-list.component';
import { EtatMagasinEditComponent } from './etat-magasin-edit/etat-magasin-edit.component';
import { EtatMagasinViewComponent } from './etat-magasin-view/etat-magasin-view.component';
import { EtatMagasinListService } from 'app/main/apps/gestion-dechets/etat-magasin/etat-magasin-list/etat-magasin-list.service';

import { NewEtatMagasinSidebarComponent } from 'app/main/apps/gestion-dechets/etat-magasin/etat-magasin-list/new-etat-magasin-sidebar/new-etat-magasin-sidebar.component';
import { EtatMagasinEditService } from 'app/main/apps/gestion-dechets/etat-magasin/etat-magasin-edit/etat-magasin-edit.service';
import{ EtatMagasinViewService } from 'app/main/apps/gestion-dechets/etat-magasin/etat-magasin-view/etat-magasin-view.service';

import { TranslateModule } from '@ngx-translate/core';

// routing
const routes: Routes = [
  {path: 'etat-magasin-list',component: EtatMagasinListComponent  },
  {path: 'etat-magasin-list/etat-magasin-edit/:id',   component: EtatMagasinEditComponent,
    resolve: {
      uls: EtatMagasinEditService
    } 
  },
  {path: 'etat-magasin-list/etat-magasin-view/:id',   component: EtatMagasinViewComponent,
    resolve: {
      uls: EtatMagasinViewService
    }
  },
  {path: 'etat-magasin-list/etat-magasin-view',  redirectTo: '/apps/etat-magasin/etat-magasin-list'},
  {path: 'etat-magasin-list/etat-magasin-edit',    redirectTo: '/apps/etat-magasin/etat-magasin-list' }
];

@NgModule({
  declarations: [
    EtatMagasinListComponent,NewEtatMagasinSidebarComponent,EtatMagasinEditComponent,EtatMagasinViewComponent
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
  providers: [EtatMagasinListService, EtatMagasinEditService,EtatMagasinViewService]
})
export class EtatMagasinModule { }
