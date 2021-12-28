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

import { FournisseurListComponent } from './fournisseur-list/fournisseur-list.component';
import { FournisseurEditComponent } from './fournisseur-edit/fournisseur-edit.component';
import { FournisseurViewComponent } from './fournisseur-view/fournisseur-view.component';
import { FournisseurListService } from 'app/main/apps/gestion-dechets/fournisseur/fournisseur-list/fournisseur-list.service';

import { NewFournisseurSidebarComponent } from 'app/main/apps/gestion-dechets/fournisseur/fournisseur-list/new-fournisseur-sidebar/new-fournisseur-sidebar.component';
import { FournisseurEditService } from 'app/main/apps/gestion-dechets/fournisseur/fournisseur-edit/fournisseur-edit.service';
import { FournisseurViewService } from 'app/main/apps/gestion-dechets/fournisseur/fournisseur-view/fournisseur-view.service';

import { TranslateModule } from '@ngx-translate/core';

// routing
const routes: Routes = [
  {path: 'fournisseur-list',component: FournisseurListComponent  },
  {path: 'fournisseur-list/fournisseur-edit/:id',   component: FournisseurEditComponent,
    resolve: {
      uls: FournisseurEditService
    } 
  },
  {path: 'fournisseur-list/fournisseur-view/:id',   component: FournisseurViewComponent,
    resolve: {
      uls: FournisseurViewService
    }
  },
  {path: 'fournisseur-list/fournisseur-view',  redirectTo: '/apps/fournisseur/fournisseur-list'},
  {path: 'fournisseur-list/fournisseur-edit',    redirectTo: '/apps/fournisseur/fournisseur-list' }
];

@NgModule({
  declarations: [
    FournisseurListComponent,NewFournisseurSidebarComponent,FournisseurEditComponent,FournisseurViewComponent
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
  providers: [FournisseurListService, FournisseurEditService,FournisseurViewService]
})
export class FournisseurModule { }
