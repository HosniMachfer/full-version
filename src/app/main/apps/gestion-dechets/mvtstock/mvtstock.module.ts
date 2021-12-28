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

import { MvtstockListComponent } from './mvtstock-list/mvtstock-list.component';
import { MvtstockEditComponent } from './mvtstock-edit/mvtstock-edit.component';
import { MvtstockViewComponent } from './mvtstock-view/mvtstock-view.component';
import { MvtstockListService } from 'app/main/apps/gestion-dechets/mvtstock/mvtstock-list/mvtstock-list.service';

import { NewMvtstockSidebarComponent } from 'app/main/apps/gestion-dechets/mvtstock/mvtstock-list/new-mvtstock-sidebar/new-mvtstock-sidebar.component';
import { MvtstockEditService } from 'app/main/apps/gestion-dechets/mvtstock/mvtstock-edit/mvtstock-edit.service';
import{ MvtstockViewService } from 'app/main/apps/gestion-dechets/mvtstock/mvtstock-view/mvtstock-view.service';

import { TranslateModule } from '@ngx-translate/core';

// routing
const routes: Routes = [
  {path: 'mvtstock-list',component: MvtstockListComponent  },
  {path: 'mvtstock-list/mvtstock-edit/:id',   component: MvtstockEditComponent,
    resolve: {
      uls: MvtstockEditService
    } 
  },
  {path: 'mvtstock-list/mvtstock-view/:id',   component: MvtstockViewComponent,
    resolve: {
      uls: MvtstockViewService
    }
  },
  {path: 'mvtstock-list/mvtstock-view',  redirectTo: '/apps/mvtstock/mvtstock-list'},
  {path: 'mvtstock-list/mvtstock-edit',    redirectTo: '/apps/mvtstock/mvtstock-list' }
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
export class MvtstockModule { }
