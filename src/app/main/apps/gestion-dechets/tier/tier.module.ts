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

import { MvtstockListComponent } from './tier-list/tier-list.component';
import { MvtstockEditComponent } from './tier-edit/tier-edit.component';
import { MvtstockViewComponent } from './tier-view/tier-view.component';
import { MvtstockListService } from 'app/main/apps/gestion-dechets/tier/tier-list/tier-list.service';

import { NewMvtstockSidebarComponent } from 'app/main/apps/gestion-dechets/tier/tier-list/new-tier-sidebar/new-tier-sidebar.component';
import { MvtstockEditService } from 'app/main/apps/gestion-dechets/tier/tier-edit/tier-edit.service';
import{ MvtstockViewService } from 'app/main/apps/gestion-dechets/tier/tier-view/tier-view.service';

import { TranslateModule } from '@ngx-translate/core';

// routing
const routes: Routes = [
  {path: 'tier-list',component: MvtstockListComponent  },
  {path: 'tier-list/tier-edit/:id',   component: MvtstockEditComponent,
    resolve: {
      uls: MvtstockEditService
    } 
  },
  {path: 'tier-list/tier-view/:id',   component: MvtstockViewComponent,
    resolve: {
      uls: MvtstockViewService
    }
  },
  {path: 'tier-list/tier-view',  redirectTo: '/apps/tier/tier-list'},
  {path: 'tier-list/tier-edit',    redirectTo: '/apps/tier/tier-list' }
];

@NgModule({
  declarations: [
    MvtstockListComponent,NewMvtstockSidebarComponent,MvtstockEditComponent,MvtstockViewComponent
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
  providers: [MvtstockListService, MvtstockEditService,MvtstockViewService]
})
export class TierModule { }
