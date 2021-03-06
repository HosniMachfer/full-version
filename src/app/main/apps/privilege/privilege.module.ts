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

import { PrivilegeListComponent } from './privilege-list/privilege-list.component';
import { PrivilegeEditComponent } from './privilege-edit/privilege-edit.component';
import { PrivilegeViewComponent } from './privilege-view/privilege-view.component';
import { PrivilegeListService } from 'app/main/apps/privilege/privilege-list/privilege-list.service';

import { NewPrivilegeSidebarComponent } from 'app/main/apps/privilege/privilege-list/new-privilege-sidebar/new-privilege-sidebar.component';
import { PrivilegeEditService } from 'app/main/apps/privilege/privilege-edit/privilege-edit.service';
import{ PrivilegeViewService } from 'app/main/apps/privilege/privilege-view/privilege-view.service';

import { TranslateModule } from '@ngx-translate/core';

// routing
const routes: Routes = [
  {path: 'privilege-list',component: PrivilegeListComponent  },
  {path: 'privilege-list/privilege-edit/:id',   component: PrivilegeEditComponent,
    resolve: {
      uls: PrivilegeEditService
    } 
  },
  {path: 'privilege-list/privilege-view/:id',   component: PrivilegeViewComponent,
    resolve: {
      uls: PrivilegeViewService
    }
  },
  {path: 'privilege-list/privilege-view',  redirectTo: '/apps/privilege/privilege-list'},
  {path: 'privilege-list/privilege-edit',    redirectTo: '/apps/privilege/privilege-list' }
];

@NgModule({
  declarations: [
    PrivilegeListComponent,NewPrivilegeSidebarComponent,PrivilegeEditComponent,PrivilegeViewComponent
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
  providers: [PrivilegeListService, PrivilegeEditService,PrivilegeViewService]
})
export class PrivilegeModule { }
