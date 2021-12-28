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

import { MouvementListComponent } from './mouvement-list/mouvement-list.component';
import { MouvementEditComponent } from './mouvement-edit/mouvement-edit.component';
import { MouvementViewComponent } from './mouvement-view/mouvement-view.component';
import { MouvementListService } from 'app/main/apps/gestion-dechets/mouvement/mouvement-list/mouvement-list.service';

import { NewMouvementSidebarComponent } from 'app/main/apps/gestion-dechets/mouvement/mouvement-list/new-mouvement-sidebar/new-mouvement-sidebar.component';
import { MouvementEditService } from 'app/main/apps/gestion-dechets/mouvement/mouvement-edit/mouvement-edit.service';
import{ MouvementViewService } from 'app/main/apps/gestion-dechets/mouvement/mouvement-view/mouvement-view.service';

import { TranslateModule } from '@ngx-translate/core';

// routing
const routes: Routes = [
  {path: 'mouvement-list',component: MouvementListComponent  },
  {path: 'mouvement-list/mouvement-edit/:id',   component: MouvementEditComponent,
    resolve: {
      uls: MouvementEditService
    } 
  },
  {path: 'mouvement-list/mouvement-view/:id',   component: MouvementViewComponent,
    resolve: {
      uls: MouvementViewService
    }
  },
  {path: 'mouvement-list/mouvement-view',  redirectTo: '/apps/mouvement/mouvement-list'},
  {path: 'mouvement-list/mouvement-edit',    redirectTo: '/apps/mouvement/mouvement-list' }
];

@NgModule({
  declarations: [
    MouvementListComponent,NewMouvementSidebarComponent,MouvementEditComponent,MouvementViewComponent
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
  providers: [MouvementListService, MouvementEditService,MouvementViewService]
})
export class MouvementModule { }
