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

import { TypeTierListComponent } from './type-tier-list/type-tier-list.component';
import { TypeTierEditComponent } from './type-tier-edit/type-tier-edit.component';
import { TypeTierViewComponent } from './type-tier-view/type-tier-view.component';
import { TypeTierListService } from 'app/main/apps/gestion-dechets/type-tier/type-tier-list/type-tier-list.service';

import { NewTypeTierSidebarComponent } from 'app/main/apps/gestion-dechets/type-tier/type-tier-list/new-type-tier-sidebar/new-type-tier-sidebar.component';
import { TypeTierEditService } from 'app/main/apps/gestion-dechets/type-tier/type-tier-edit/type-tier-edit.service';
import{ TypeTierViewService } from 'app/main/apps/gestion-dechets/type-tier/type-tier-view/type-tier-view.service';

import { TranslateModule } from '@ngx-translate/core';

// routing
const routes: Routes = [
  {path: 'type-tier-list',component: TypeTierListComponent  },
  {path: 'type-tier-list/type-tier-edit/:id',   component: TypeTierEditComponent,
    resolve: {
      uls: TypeTierEditService
    } 
  },
  {path: 'type-tier-list/type-tier-view/:id',   component: TypeTierViewComponent,
    resolve: {
      uls: TypeTierViewService
    }
  },
  {path: 'type-tier-list/type-tier-view',  redirectTo: '/apps/type-tier/type-tier-list'},
  {path: 'type-tier-list/type-tier-edit',    redirectTo: '/apps/type-tier/type-tier-list' }
];

@NgModule({
  declarations: [
    TypeTierListComponent,NewTypeTierSidebarComponent,TypeTierEditComponent,TypeTierViewComponent
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
  providers: [TypeTierListService, TypeTierEditService,TypeTierViewService]
})
export class TypeTierModule { }
