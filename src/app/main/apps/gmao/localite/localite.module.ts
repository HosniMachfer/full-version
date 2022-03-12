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

import { LocaliteListComponent } from './localite-list/localite-list.component';
import { LocaliteEditComponent } from './localite-edit/localite-edit.component';
import { LocaliteViewComponent } from './localite-view/localite-view.component';
import { LocaliteListService } from 'app/main/apps/gmao/localite/localite-list/localite-list.service';

import { NewLocaliteSidebarComponent } from 'app/main/apps/gmao/localite/localite-list/new-localite-sidebar/new-localite-sidebar.component';
import { LocaliteEditService } from 'app/main/apps/gmao/localite/localite-edit/localite-edit.service';
import{ LocaliteViewService } from 'app/main/apps/gmao/localite/localite-view/localite-view.service';

import { TranslateModule } from '@ngx-translate/core';

// routing
const routes: Routes = [
  {path: 'localite-list',component: LocaliteListComponent  },
  {path: 'localite-list/localite-edit/:id',   component: LocaliteEditComponent,
    resolve: {
      uls: LocaliteEditService
    } 
  },
  {path: 'localite-list/localite-view/:id',   component: LocaliteViewComponent,
    resolve: {
      uls: LocaliteViewService
    }
  },
  {path: 'localite-list/localite-view',  redirectTo: '/apps/localite/localite-list'},
  {path: 'localite-list/localite-edit',    redirectTo: '/apps/localite/localite-list' }
];

@NgModule({
  declarations: [
    LocaliteListComponent,NewLocaliteSidebarComponent,LocaliteEditComponent,LocaliteViewComponent
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
  providers: [LocaliteListService, LocaliteEditService,LocaliteViewService]
})
export class LocaliteModule { }
