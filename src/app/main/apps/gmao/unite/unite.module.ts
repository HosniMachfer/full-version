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
import { UniteGmaoEditComponent } from './unite-edit/unite-edit.component';
import { UniteGmaoViewComponent } from './unite-view/unite-view.component';
import { UniteGmaoListService } from 'app/main/apps/gmao/unite/unite-list/unite-list.service';

import { NewUniteSidebarComponent } from 'app/main/apps/gmao/unite/unite-list/new-unite-sidebar/new-unite-sidebar.component';
import { UniteGmaoEditService } from 'app/main/apps/gmao/unite/unite-edit/unite-edit.service';
import { UniteGmaoViewService } from 'app/main/apps/gmao/unite/unite-view/unite-view.service';

import { TranslateModule } from '@ngx-translate/core';

// routing
const routes: Routes = [
  {path: 'unite-list',component: UniteListComponent  },
  {path: 'unite-list/unite-edit/:id',   component: UniteGmaoEditComponent,
    resolve: {
      uls: UniteGmaoEditService
    } 
  },
  {path: 'unite-list/unite-view/:id',   component: UniteGmaoViewComponent,
    resolve: {
      uls: UniteGmaoViewService
    }
  },
  {path: 'unite-list/unite-view',  redirectTo: '/apps/unite/unite-list'},
  {path: 'unite-list/unite-edit',    redirectTo: '/apps/unite/unite-list' }
];

@NgModule({
  declarations: [
    UniteListComponent,NewUniteSidebarComponent,UniteGmaoEditComponent,UniteGmaoViewComponent
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
  providers: [UniteGmaoListService, UniteGmaoEditService,UniteGmaoViewService]
})
export class UniteModule { }
