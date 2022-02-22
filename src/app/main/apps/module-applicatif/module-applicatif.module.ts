
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
import { ModuleApplicatifListComponent } from './module-applicatif-list/module-applicatif-list.component';
import { ModuleApplicatifEditComponent } from './module-applicatif-edit/module-applicatif-edit.component';
import { ModuleApplicatifViewComponent } from './module-applicatif-view/module-applicatif-view.component';
import { ModuleApplicatifListService } from 'app/main/apps/module-applicatif/module-applicatif-list/module-applicatif-list.service';
import { ModuleApplicatifViewService } from 'app/main/apps/module-applicatif/module-applicatif-view/module-applicatif-view.service';

import { NewModuleApplicatifSidebarComponent } from 'app/main/apps/module-applicatif/module-applicatif-list/new-module-applicatif-sidebar/new-module-applicatif-sidebar.component';
import { UserEditService } from 'app/main/apps/user/user-edit/user-edit.service';
import { ModuleApplicatifEditService } from 'app/main/apps/module-applicatif/module-applicatif-edit/module-applicatif-edit.service';
import { TranslateModule } from '@ngx-translate/core';

// routing
const routes: Routes = [
  {path: 'module-applicatif-list',component: ModuleApplicatifListComponent  },
  {path: 'module-applicatif-list/module-applicatif-edit/:id',   component: ModuleApplicatifEditComponent,
    resolve: {
      uls: ModuleApplicatifEditService
    } 
  },
  {path: 'module-applicatif-list/module-applicatif-view/:id',   component: ModuleApplicatifViewComponent,
    resolve: {
      uls: ModuleApplicatifViewService
    }
  },
  {path: 'module-applicatif-list/module-applicatif-view',  redirectTo: '/apps/module-applicatif/module-applicatif-list'},
  {path: 'module-applicatif-list/module-applicatif-edit',    redirectTo: '/apps/module-applicatif/module-applicatif-list' }
];


@NgModule({
  declarations: [
    ModuleApplicatifListComponent,NewModuleApplicatifSidebarComponent,ModuleApplicatifEditComponent,ModuleApplicatifViewComponent
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
  providers: [ModuleApplicatifListService, UserEditService, ModuleApplicatifEditService, ModuleApplicatifViewService]
})
export class ModuleApplicatifModule { }
