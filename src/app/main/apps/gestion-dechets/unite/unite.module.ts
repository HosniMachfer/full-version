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

import { UniteListComponent } from './unite-list/unite-list.component';
import { UniteEditComponent } from './unite-edit/unite-edit.component';
import { UniteViewComponent } from './unite-view/unite-view.component';
import { UniteListService } from 'app/main/apps/gestion-dechets/unite/unite-list/unite-list.service';

import { NewUniteSidebarComponent } from 'app/main/apps/gestion-dechets/unite/unite-list/new-unite-sidebar/new-unite-sidebar.component';
import { UniteEditService } from 'app/main/apps/gestion-dechets/unite/unite-edit/unite-edit.service';
import { UniteViewService } from 'app/main/apps/gestion-dechets/unite/unite-view/unite-view.service';

import { TranslateModule } from '@ngx-translate/core';

// routing
const routes: Routes = [
  {path: 'unite-list',component: UniteListComponent  },
  {path: 'unite-list/unite-edit/:id',   component: UniteEditComponent,
    resolve: {
      uls: UniteEditService
    } 
  },
  {path: 'unite-list/unite-view/:id',   component: UniteViewComponent,
    resolve: {
      uls: UniteViewService
    }
  },
  {path: 'unite-list/unite-view',  redirectTo: '/apps/unite/unite-list'},
  {path: 'unite-list/unite-edit',    redirectTo: '/apps/unite/unite-list' }
];

@NgModule({
  declarations: [
    UniteListComponent,NewUniteSidebarComponent,UniteEditComponent,UniteViewComponent
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
  providers: [UniteListService, UniteEditService,UniteViewService]
})
export class UniteModule { }
