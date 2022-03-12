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

import { MarqueListComponent } from './marque-list/marque-list.component';
import { MarqueEditComponent } from './marque-edit/marque-edit.component';
import { MarqueViewComponent } from './marque-view/marque-view.component';
import { MarqueListService } from 'app/main/apps/gmao/marque/marque-list/marque-list.service';

import { NewMarqueSidebarComponent } from 'app/main/apps/gmao/marque/marque-list/new-marque-sidebar/new-marque-sidebar.component';
import { MarqueEditService } from 'app/main/apps/gmao/marque/marque-edit/marque-edit.service';
import{ MarqueViewService } from 'app/main/apps/gmao/marque/marque-view/marque-view.service';

import { TranslateModule } from '@ngx-translate/core';

// routing
const routes: Routes = [
  {path: 'marque-list',component: MarqueListComponent  },
  {path: 'marque-list/marque-edit/:id',   component: MarqueEditComponent,
    resolve: {
      uls: MarqueEditService
    } 
  },
  {path: 'marque-list/marque-view/:id',   component: MarqueViewComponent,
    resolve: {
      uls: MarqueViewService
    }
  },
  {path: 'marque-list/marque-view',  redirectTo: '/apps/marque/marque-list'},
  {path: 'marque-list/marque-edit',    redirectTo: '/apps/marque/marque-list' }
];

@NgModule({
  declarations: [
    MarqueListComponent,NewMarqueSidebarComponent,MarqueEditComponent,MarqueViewComponent
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
  providers: [MarqueListService, MarqueEditService,MarqueViewService]
})
export class MarqueModule { }
