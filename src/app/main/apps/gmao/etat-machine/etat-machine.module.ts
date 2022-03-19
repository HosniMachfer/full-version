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

import { EtatMachineListComponent } from './etat-machine-list/etat-machine-list.component';
import { EtatMachineEditComponent } from './etat-machine-edit/etat-machine-edit.component';
import { EtatMachineViewComponent } from './etat-machine-view/etat-machine-view.component';
import { EtatMachineListService } from 'app/main/apps/gmao/etat-machine/etat-machine-list/etat-machine-list.service';

import { NewEtatMachineSidebarComponent } from 'app/main/apps/gmao/etat-machine/etat-machine-list/new-etat-machine-sidebar/new-etat-machine-sidebar.component';
import { EtatMachineEditService } from 'app/main/apps/gmao/etat-machine/etat-machine-edit/etat-machine-edit.service';
import{ EtatMachineViewService } from 'app/main/apps/gmao/etat-machine/etat-machine-view/etat-machine-view.service';

import { TranslateModule } from '@ngx-translate/core';

// routing
const routes: Routes = [
  {path: 'etat-machine-list',component: EtatMachineListComponent  },
  {path: 'etat-machine-list/etat-machine-edit/:id',   component: EtatMachineEditComponent,
    resolve: {
      uls: EtatMachineEditService
    } 
  },
  {path: 'etat-machine-list/etat-machine-view/:id',   component: EtatMachineViewComponent,
    resolve: {
      uls: EtatMachineViewService
    }
  },
  {path: 'etat-machine-list/etat-machine-view',  redirectTo: '/apps/etat-machine/etat-machine-list'},
  {path: 'etat-machine-list/etat-machine-edit',    redirectTo: '/apps/etat-machine/etat-machine-list' }
];

@NgModule({
  declarations: [
    EtatMachineListComponent,NewEtatMachineSidebarComponent,EtatMachineEditComponent,EtatMachineViewComponent
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
  providers: [EtatMachineListService, EtatMachineEditService,EtatMachineViewService]
})
export class EtatMachineModule { }
