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

import { MagasinListComponent } from './magasin-list/magasin-list.component';
import { MagasinEditComponent } from './magasin-edit/magasin-edit.component';
import { MagasinViewComponent } from './magasin-view/magasin-view.component';
import { MagasinListService } from 'app/main/apps/gestion-dechets/magasin/magasin-list/magasin-list.service';

import { NewMagasinSidebarComponent } from 'app/main/apps/gestion-dechets/magasin/magasin-list/new-magasin-sidebar/new-magasin-sidebar.component';
import { MagasinEditService } from 'app/main/apps/gestion-dechets/magasin/magasin-edit/magasin-edit.service';
import{ MagasinViewService } from 'app/main/apps/gestion-dechets/magasin/magasin-view/magasin-view.service';

import { TranslateModule } from '@ngx-translate/core';

// routing
const routes: Routes = [
  {path: 'magasin-list',component: MagasinListComponent  },
  {path: 'magasin-list/magasin-edit/:id',   component: MagasinEditComponent,
    resolve: {
      uls: MagasinEditService
    } 
  },
  {path: 'magasin-list/magasin-view/:id',   component: MagasinViewComponent,
    resolve: {
      uls: MagasinViewService
    }
  },
  {path: 'magasin-list/magasin-view',  redirectTo: '/apps/magasin/magasin-list'},
  {path: 'magasin-list/magasin-edit',    redirectTo: '/apps/magasin/magasin-list' }
];

@NgModule({
  declarations: [
    MagasinListComponent,NewMagasinSidebarComponent,MagasinEditComponent,MagasinViewComponent
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
  providers: [MagasinListService, MagasinEditService,MagasinViewService]
})
export class MagasinModule { }
