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

import { EtatActuelListComponent } from './etat-actuel-list/etat-actuel-list.component';
import { EtatActuelEditComponent } from './etat-actuel-edit/etat-actuel-edit.component';
import { EtatActuelViewComponent } from './etat-actuel-view/etat-actuel-view.component';
import { EtatActuelListService } from 'app/main/apps/gmao/etat-actuel/etat-actuel-list/etat-actuel-list.service';

import { NewEtatActuelSidebarComponent } from 'app/main/apps/gmao/etat-actuel/etat-actuel-list/new-etat-actuel-sidebar/new-etat-actuel-sidebar.component';
import { EtatActuelEditService } from 'app/main/apps/gmao/etat-actuel/etat-actuel-edit/etat-actuel-edit.service';
import{ EtatActuelViewService } from 'app/main/apps/gmao/etat-actuel/etat-actuel-view/etat-actuel-view.service';

import { TranslateModule } from '@ngx-translate/core';

// routing
const routes: Routes = [
  {path: 'etat-actuel-list',component: EtatActuelListComponent  },
  {path: 'etat-actuel-list/etat-actuel-edit/:id',   component: EtatActuelEditComponent,
    resolve: {
      uls: EtatActuelEditService
    } 
  },
  {path: 'etat-actuel-list/etat-actuel-view/:id',   component: EtatActuelViewComponent,
    resolve: {
      uls: EtatActuelViewService
    }
  },
  {path: 'etat-actuel-list/etat-actuel-view',  redirectTo: '/apps/etat-actuel/etat-actuel-list'},
  {path: 'etat-actuel-list/etat-actuel-edit',    redirectTo: '/apps/etat-actuel/etat-actuel-list' }
];

@NgModule({
  declarations: [
    EtatActuelListComponent,NewEtatActuelSidebarComponent,EtatActuelEditComponent,EtatActuelViewComponent
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
  providers: [EtatActuelListService, EtatActuelEditService,EtatActuelViewService]
})
export class EtatActuelModule { }
