
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
import { RoleListComponent } from './role-list/role-list.component';
import { RoleEditComponent } from './role-edit/role-edit.component';
import { RoleViewComponent } from './role-view/role-view.component';
import { RoleListService } from 'app/main/apps/role/role-list/role-list.service';
import { RoleViewService } from 'app/main/apps/role/role-view/role-view.service';

import { NewRoleSidebarComponent } from 'app/main/apps/role/role-list/new-role-sidebar/new-role-sidebar.component';
import { UserEditService } from 'app/main/apps/user/user-edit/user-edit.service';
import { RoleEditService } from 'app/main/apps/role/role-edit/role-edit.service';
import { TranslateModule } from '@ngx-translate/core';

// routing
const routes: Routes = [
  {path: 'role-list',component: RoleListComponent  },
  {path: 'role-list/role-edit/:id',   component: RoleEditComponent,
    resolve: {
      uls: RoleEditService
    } 
  },
  {path: 'role-list/role-view/:id',   component: RoleViewComponent,
    resolve: {
      uls: RoleViewService
    }
  },
  {path: 'role-list/role-view',  redirectTo: '/apps/role/role-list'},
  {path: 'role-list/role-edit',    redirectTo: '/apps/role/role-list' }
];


@NgModule({
  declarations: [
    RoleListComponent,NewRoleSidebarComponent,RoleEditComponent,RoleViewComponent
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
  providers: [RoleListService, UserEditService,RoleEditService,RoleViewService]
})
export class RoleModule { }
