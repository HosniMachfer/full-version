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

import { RecycleurListComponent } from './recycleur-list/recycleur-list.component';
import { RecycleurEditComponent } from './recycleur-edit/recycleur-edit.component';
import { RecycleurViewComponent } from './recycleur-view/recycleur-view.component';
import { RecycleurListService } from 'app/main/apps/gestion-dechets/recycleur/recycleur-list/recycleur-list.service';

import { NewRecycleurSidebarComponent } from 'app/main/apps/gestion-dechets/recycleur/recycleur-list/new-recycleur-sidebar/new-recycleur-sidebar.component';
import { RecycleurEditService } from 'app/main/apps/gestion-dechets/recycleur/recycleur-edit/recycleur-edit.service';
import { RecycleurViewService } from 'app/main/apps/gestion-dechets/recycleur/recycleur-view/recycleur-view.service';

import { TranslateModule } from '@ngx-translate/core';

// routing
const routes: Routes = [
  {path: 'recycleur-list',component: RecycleurListComponent  },
  {path: 'recycleur-list/recycleur-edit/:id',   component: RecycleurEditComponent,
    resolve: {
      uls: RecycleurEditService
    } 
  },
  {path: 'recycleur-list/recycleur-view/:id',   component: RecycleurViewComponent,
    resolve: {
      uls: RecycleurViewService
    }
  },
  {path: 'recycleur-list/recycleur-view',  redirectTo: '/apps/recycleur/recycleur-list'},
  {path: 'recycleur-list/recycleur-edit',    redirectTo: '/apps/recycleur/recycleur-list' }
];

@NgModule({
  declarations: [
    RecycleurListComponent,NewRecycleurSidebarComponent,RecycleurEditComponent,RecycleurViewComponent
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
  providers: [RecycleurListService, RecycleurEditService,RecycleurViewService]
})
export class RecycleurModule { }
