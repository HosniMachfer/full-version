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

import { FamilleListComponent } from './famille-list/famille-list.component';
import { FamilleEditComponent } from './famille-edit/famille-edit.component';
import { FamilleViewComponent } from './famille-view/famille-view.component';
import { FamilleListService } from 'app/main/apps/gestion-dechets/famille/famille-list/famille-list.service';

import { NewFamilleSidebarComponent } from 'app/main/apps/gestion-dechets/famille/famille-list/new-famille-sidebar/new-famille-sidebar.component';
import { FamilleEditService } from 'app/main/apps/gestion-dechets/famille/famille-edit/famille-edit.service';
import{ FamilleViewService } from 'app/main/apps/gestion-dechets/famille/famille-view/famille-view.service';

import { TranslateModule } from '@ngx-translate/core';

// routing
const routes: Routes = [
  {path: 'famille-list',component: FamilleListComponent  },
  {path: 'famille-list/famille-edit/:id',   component: FamilleEditComponent,
    resolve: {
      uls: FamilleEditService
    } 
  },
  {path: 'famille-list/famille-view/:id',   component: FamilleViewComponent,
    resolve: {
      uls: FamilleViewService
    }
  },
  {path: 'famille-list/famille-view',  redirectTo: '/apps/famille/famille-list'},
  {path: 'famille-list/famille-edit',    redirectTo: '/apps/famille/famille-list' }
];

@NgModule({
  declarations: [
    FamilleListComponent,NewFamilleSidebarComponent,FamilleEditComponent,FamilleViewComponent
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
  providers: [FamilleListService, FamilleEditService,FamilleViewService]
})
export class FamilleModule { }
