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

import { MachineListComponent } from './machine-list/machine-list.component';
import { MachineEditComponent } from './machine-edit/machine-edit.component';
import { MachineViewComponent } from './machine-view/machine-view.component';
import { MachineListService } from 'app/main/apps/gmao/machine/machine-list/machine-list.service';

import { NewMachineSidebarComponent } from 'app/main/apps/gmao/machine/machine-list/new-machine-sidebar/new-machine-sidebar.component';
import { MachineEditService } from 'app/main/apps/gmao/machine/machine-edit/machine-edit.service';
import{ MachineViewService } from 'app/main/apps/gmao/machine/machine-view/machine-view.service';

import { TranslateModule } from '@ngx-translate/core';

// routing
const routes: Routes = [
  {path: 'machine-list',component: MachineListComponent  },
  {path: 'machine-list/machine-edit/:id',   component: MachineEditComponent,
    resolve: {
      uls: MachineEditService
    } 
  },
  {path: 'machine-list/machine-view/:id',   component: MachineViewComponent,
    resolve: {
      uls: MachineViewService
    }
  },
  {path: 'machine-list/machine-view',  redirectTo: '/apps/machine/machine-list'},
  {path: 'machine-list/machine-edit',    redirectTo: '/apps/machine/machine-list' }
];

@NgModule({
  declarations: [
    MachineListComponent,NewMachineSidebarComponent,MachineEditComponent,MachineViewComponent
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
  providers: [MachineListService, MachineEditService,MachineViewService]
})
export class MachineModule { }
