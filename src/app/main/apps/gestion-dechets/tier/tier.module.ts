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

import { TierListComponent } from './tier-list/tier-list.component';
import { TierEditComponent } from './tier-edit/tier-edit.component';
import { TierViewComponent } from './tier-view/tier-view.component';
import { TierListService } from 'app/main/apps/gestion-dechets/tier/tier-list/tier-list.service';

import { NewTierSidebarComponent } from 'app/main/apps/gestion-dechets/tier/tier-list/new-tier-sidebar/new-tier-sidebar.component';
import { TierEditService } from 'app/main/apps/gestion-dechets/tier/tier-edit/tier-edit.service';
import{ TierViewService } from 'app/main/apps/gestion-dechets/tier/tier-view/tier-view.service';

import { TranslateModule } from '@ngx-translate/core';

// routing
const routes: Routes = [
  {path: 'tier-list',component: TierListComponent  },
  {path: 'tier-list/tier-edit/:id',   component: TierEditComponent,
    resolve: {
      uls: TierEditService
    } 
  },
  {path: 'tier-list/tier-view/:id',   component: TierViewComponent,
    resolve: {
      uls: TierViewService
    }
  },
  {path: 'tier-list/tier-view',  redirectTo: '/apps/tier/tier-list'},
  {path: 'tier-list/tier-edit',    redirectTo: '/apps/tier/tier-list' }
];

@NgModule({
  declarations: [
    TierListComponent,NewTierSidebarComponent,TierEditComponent,TierViewComponent
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
  providers: [TierListService, TierEditService,TierViewService]
})
export class TierModule { }
