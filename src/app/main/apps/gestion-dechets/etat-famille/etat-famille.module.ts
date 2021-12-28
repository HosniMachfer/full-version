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

import { EtatFamilleListComponent } from './etat-famille-list/etat-famille-list.component';
import { EtatFamilleEditComponent } from './etat-famille-edit/etat-famille-edit.component';
import { EtatFamilleViewComponent } from './etat-famille-view/etat-famille-view.component';
import { EtatFamilleListService } from 'app/main/apps/gestion-dechets/etat-famille/etat-famille-list/etat-famille-list.service';

import { NewEtatFamilleSidebarComponent } from 'app/main/apps/gestion-dechets/etat-famille/etat-famille-list/new-etat-famille-sidebar/new-etat-famille-sidebar.component';
import { EtatFamilleEditService } from 'app/main/apps/gestion-dechets/etat-famille/etat-famille-edit/etat-famille-edit.service';
import{ EtatFamilleViewService } from 'app/main/apps/gestion-dechets/etat-famille/etat-famille-view/etat-famille-view.service';

import { TranslateModule } from '@ngx-translate/core';

// routing
const routes: Routes = [
  {path: 'etat-famille-list',component: EtatFamilleListComponent  },
  {path: 'etat-famille-list/etat-famille-edit/:id',   component: EtatFamilleEditComponent,
    resolve: {
      uls: EtatFamilleEditService
    } 
  },
  {path: 'etat-famille-list/etat-famille-view/:id',   component: EtatFamilleViewComponent,
    resolve: {
      uls: EtatFamilleViewService
    }
  },
  {path: 'etat-famille-list/etat-famille-view',  redirectTo: '/apps/etat-famille/etat-famille-list'},
  {path: 'etat-famille-list/etat-famille-edit',    redirectTo: '/apps/etat-famille/etat-famille-list' }
];

@NgModule({
  declarations: [
    EtatFamilleListComponent,NewEtatFamilleSidebarComponent,EtatFamilleEditComponent,EtatFamilleViewComponent
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
  providers: [EtatFamilleListService, EtatFamilleEditService,EtatFamilleViewService]
})
export class EtatFamilleModule { }
