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

import { UsineListComponent } from './usine-list/usine-list.component';
import { UsineEditComponent } from './usine-edit/usine-edit.component';
import { UsineViewComponent } from './usine-view/usine-view.component';
import { UsineListService } from 'app/main/apps/gestion-dechets/usine/usine-list/usine-list.service';

import { NewUsineSidebarComponent } from 'app/main/apps/gestion-dechets/usine/usine-list/new-usine-sidebar/new-usine-sidebar.component';
import { UsineEditService } from 'app/main/apps/gestion-dechets/usine/usine-edit/usine-edit.service';
import{ UsineViewService } from 'app/main/apps/gestion-dechets/usine/usine-view/usine-view.service';

import { TranslateModule } from '@ngx-translate/core';

// routing
const routes: Routes = [
  {path: 'usine-list',component: UsineListComponent  },
  {path: 'usine-list/usine-edit/:id',   component: UsineEditComponent,
    resolve: {
      uls: UsineEditService
    } 
  },
  {path: 'usine-list/usine-view/:id',   component: UsineViewComponent,
    resolve: {
      uls: UsineViewService
    }
  },
  {path: 'usine-list/usine-view',  redirectTo: '/apps/usine/usine-list'},
  {path: 'usine-list/usine-edit',    redirectTo: '/apps/usine/usine-list' }
];

@NgModule({
  declarations: [
    UsineListComponent,NewUsineSidebarComponent,UsineEditComponent,UsineViewComponent
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
  providers: [UsineListService, UsineEditService,UsineViewService]
})
export class UsineModule { }
