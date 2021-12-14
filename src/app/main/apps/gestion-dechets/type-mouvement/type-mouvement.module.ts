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

import { TypeMouvementListComponent } from './type-mouvement-list/type-mouvement-list.component';
import { TypeMouvementEditComponent } from './type-mouvement-edit/type-mouvement-edit.component';
import { TypeMouvementViewComponent } from './type-mouvement-view/type-mouvement-view.component';
import { TypeMouvementListService } from 'app/main/apps/gestion-dechets/type-mouvement/type-mouvement-list/type-mouvement-list.service';

import { NewTypeMouvementSidebarComponent } from 'app/main/apps/gestion-dechets/type-mouvement/type-mouvement-list/new-type-mouvement-sidebar/new-type-mouvement-sidebar.component';
import { TypeMouvementEditService } from 'app/main/apps/gestion-dechets/type-mouvement/type-mouvement-edit/type-mouvement-edit.service';
import{ TypeMouvementViewService } from 'app/main/apps/gestion-dechets/type-mouvement/type-mouvement-view/type-mouvement-view.service';

import { TranslateModule } from '@ngx-translate/core';

// routing
const routes: Routes = [
  {path: 'type-mouvement-list',component: TypeMouvementListComponent  },
  {path: 'type-mouvement-list/type-mouvement-edit/:id',   component: TypeMouvementEditComponent,
    resolve: {
      uls: TypeMouvementEditService
    } 
  },
  {path: 'type-mouvement-list/type-mouvement-view/:id',   component: TypeMouvementViewComponent,
    resolve: {
      uls: TypeMouvementViewService
    }
  },
  {path: 'type-mouvement-list/type-mouvement-view',  redirectTo: '/apps/type-mouvement/type-mouvement-list'},
  {path: 'type-mouvement-list/type-mouvement-edit',    redirectTo: '/apps/type-mouvement/type-mouvement-list' }
];

@NgModule({
  declarations: [
    TypeMouvementListComponent,NewTypeMouvementSidebarComponent,TypeMouvementEditComponent,TypeMouvementViewComponent
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
  providers: [TypeMouvementListService, TypeMouvementEditService,TypeMouvementViewService]
})
export class TypeMouvementModule { }
