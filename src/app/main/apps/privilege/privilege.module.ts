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
import { PrivilegeListService } from 'app/main/apps/privilege/privilege-list/privilege-list.service';

import { NewPrivilegeSidebarComponent } from 'app/main/apps/privilege/privilege-list/new-privilege-sidebar/new-privilege-sidebar.component';
import { UserEditService } from 'app/main/apps/user/user-edit/user-edit.service';


// routing
const routes: Routes = [
  {path: 'privilege-list',component: PrivilegeListComponent}
];

@NgModule({
  declarations: [
    PrivilegeListComponent,NewPrivilegeSidebarComponent
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
    CoreSidebarModule
  ],
  providers: [PrivilegeListService, UserEditService]
})
export class PrivilegeModule { }
