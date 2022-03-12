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

import { EmplacementListComponent } from './emplacement-list/emplacement-list.component';
import { EmplacementEditComponent } from './emplacement-edit/emplacement-edit.component';
import { EmplacementViewComponent } from './emplacement-view/emplacement-view.component';
import { EmplacementListService } from 'app/main/apps/gmao/emplacement/emplacement-list/emplacement-list.service';

import { NewEmplacementSidebarComponent } from 'app/main/apps/gmao/emplacement/emplacement-list/new-emplacement-sidebar/new-emplacement-sidebar.component';
import { EmplacementEditService } from 'app/main/apps/gmao/emplacement/emplacement-edit/emplacement-edit.service';
import{ EmplacementViewService } from 'app/main/apps/gmao/emplacement/emplacement-view/emplacement-view.service';

import { TranslateModule } from '@ngx-translate/core';

// routing
const routes: Routes = [
  {path: 'emplacement-list',component: EmplacementListComponent  },
  {path: 'emplacement-list/emplacement-edit/:id',   component: EmplacementEditComponent,
    resolve: {
      uls: EmplacementEditService
    } 
  },
  {path: 'emplacement-list/emplacement-view/:id',   component: EmplacementViewComponent,
    resolve: {
      uls: EmplacementViewService
    }
  },
  {path: 'emplacement-list/emplacement-view',  redirectTo: '/apps/emplacement/emplacement-list'},
  {path: 'emplacement-list/emplacement-edit',    redirectTo: '/apps/emplacement/emplacement-list' }
];

@NgModule({
  declarations: [
    EmplacementListComponent,NewEmplacementSidebarComponent,EmplacementEditComponent,EmplacementViewComponent
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
  providers: [EmplacementListService, EmplacementEditService,EmplacementViewService]
})
export class EmplacementModule { }
