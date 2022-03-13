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

import { FamilleGmaoListComponent } from './famille-list/famille-list.component';
import { FamilleGmaoEditComponent } from './famille-edit/famille-edit.component';
import { FamilleGmaoViewComponent } from './famille-view/famille-view.component';
import { FamilleGmaoListService } from 'app/main/apps/gmao/famille/famille-list/famille-list.service';

import { NewFamilleGmaoSidebarComponent } from 'app/main/apps/gmao/famille/famille-list/new-famille-sidebar/new-famille-sidebar.component';
import { FamilleGmaoEditService } from 'app/main/apps/gmao/famille/famille-edit/famille-edit.service';
import{ FamilleGmaoViewService } from 'app/main/apps/gmao/famille/famille-view/famille-view.service';

import { TranslateModule } from '@ngx-translate/core';

// routing
const routes: Routes = [
  {path: 'famille-list',component: FamilleGmaoListComponent  },
  {path: 'famille-list/famille-edit/:id',   component: FamilleGmaoEditComponent,
    resolve: {
      uls: FamilleGmaoEditService
    } 
  },
  {path: 'famille-list/famille-view/:id',   component: FamilleGmaoViewComponent,
    resolve: {
      uls: FamilleGmaoViewService
    }
  },
  {path: 'famille-list/famille-view',  redirectTo: '/apps/famille/famille-list'},
  {path: 'famille-list/famille-edit',    redirectTo: '/apps/famille/famille-list' }
];

@NgModule({
  declarations: [
    FamilleGmaoListComponent,NewFamilleGmaoSidebarComponent,FamilleGmaoEditComponent,FamilleGmaoViewComponent
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
  providers: [FamilleGmaoListService, FamilleGmaoEditService,FamilleGmaoViewService]
})
export class FamilleModule { }
