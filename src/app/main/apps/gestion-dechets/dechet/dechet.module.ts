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

import { DechetListComponent } from './dechet-list/dechet-list.component';
import { DechetEditComponent } from './dechet-edit/dechet-edit.component';
import { DechetViewComponent } from './dechet-view/dechet-view.component';
import { DechetListService } from 'app/main/apps/gestion-dechets/dechet/dechet-list/dechet-list.service';

import { NewDechetSidebarComponent } from 'app/main/apps/gestion-dechets/dechet/dechet-list/new-dechet-sidebar/new-dechet-sidebar.component';
import { DechetEditService } from 'app/main/apps/gestion-dechets/dechet/dechet-edit/dechet-edit.service';
import { DechetViewService } from 'app/main/apps/gestion-dechets/dechet/dechet-view/dechet-view.service';

import { TranslateModule } from '@ngx-translate/core';

// routing
const routes: Routes = [
  {path: 'dechet-list',component: DechetListComponent  },
  {path: 'dechet-list/dechet-edit/:id',   component: DechetEditComponent,
    resolve: {
      uls: DechetEditService
    } 
  },
  {path: 'dechet-list/dechet-view/:id',   component: DechetViewComponent,
    resolve: {
      uls: DechetViewService
    }
  },
  {path: 'dechet-list/dechet-view',  redirectTo: '/apps/dechet/dechet-list'},
  {path: 'dechet-list/dechet-edit',    redirectTo: '/apps/dechet/dechet-list' }
];

@NgModule({
  declarations: [
    DechetListComponent,NewDechetSidebarComponent,DechetEditComponent,DechetViewComponent
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
  providers: [DechetListService, DechetEditService,DechetViewService]
})
export class DechetModule { }
