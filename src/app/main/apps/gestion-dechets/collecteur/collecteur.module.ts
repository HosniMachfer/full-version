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

import { CollecteurListComponent } from './collecteur-list/collecteur-list.component';
import { CollecteurEditComponent } from './collecteur-edit/collecteur-edit.component';
import { CollecteurViewComponent } from './collecteur-view/collecteur-view.component';
import { CollecteurListService } from 'app/main/apps/gestion-dechets/collecteur/collecteur-list/collecteur-list.service';

import { NewCollecteurSidebarComponent } from 'app/main/apps/gestion-dechets/collecteur/collecteur-list/new-collecteur-sidebar/new-collecteur-sidebar.component';
import { CollecteurEditService } from 'app/main/apps/gestion-dechets/collecteur/collecteur-edit/collecteur-edit.service';
import{ CollecteurViewService } from 'app/main/apps/gestion-dechets/collecteur/collecteur-view/collecteur-view.service';

import { TranslateModule } from '@ngx-translate/core';

// routing
const routes: Routes = [
  {path: 'collecteur-list',component: CollecteurListComponent  },
  {path: 'collecteur-list/collecteur-edit/:id',   component: CollecteurEditComponent,
    resolve: {
      uls: CollecteurEditService
    } 
  },
  {path: 'collecteur-list/collecteur-view/:id',   component: CollecteurViewComponent,
    resolve: {
      uls: CollecteurViewService
    }
  },
  {path: 'collecteur-list/collecteur-view',  redirectTo: '/apps/collecteur/collecteur-list'},
  {path: 'collecteur-list/collecteur-edit',    redirectTo: '/apps/collecteur/collecteur-list' }
];

@NgModule({
  declarations: [
    CollecteurListComponent,NewCollecteurSidebarComponent,CollecteurEditComponent,CollecteurViewComponent
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
  providers: [CollecteurListService, CollecteurEditService,CollecteurViewService]
})
export class CollecteurModule { }
