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

import { CategorieEquipementListComponent } from './categorie-equipement-list/categorie-equipement-list.component';
import { CategorieEquipementEditComponent } from './categorie-equipement-edit/categorie-equipement-edit.component';
import { CategorieEquipementViewComponent } from './categorie-equipement-view/categorie-equipement-view.component';
import { CategorieEquipementListService } from 'app/main/apps/gmao/categorie-equipement/categorie-equipement-list/categorie-equipement-list.service';

import { NewCategorieEquipementSidebarComponent } from 'app/main/apps/gmao/categorie-equipement/categorie-equipement-list/new-categorie-equipement-sidebar/new-categorie-equipement-sidebar.component';
import { CategorieEquipementEditService } from 'app/main/apps/gmao/categorie-equipement/categorie-equipement-edit/categorie-equipement-edit.service';
import{ CategorieEquipementViewService } from 'app/main/apps/gmao/categorie-equipement/categorie-equipement-view/categorie-equipement-view.service';

import { TranslateModule } from '@ngx-translate/core';

// routing
const routes: Routes = [
  {path: 'categorie-equipement-list',component: CategorieEquipementListComponent  },
  {path: 'categorie-equipement-list/categorie-equipement-edit/:id',   component: CategorieEquipementEditComponent,
    resolve: {
      uls: CategorieEquipementEditService
    } 
  },
  {path: 'categorie-equipement-list/categorie-equipement-view/:id',   component: CategorieEquipementViewComponent,
    resolve: {
      uls: CategorieEquipementViewService
    }
  },
  {path: 'categorie-equipement-list/categorie-equipement-view',  redirectTo: '/apps/categorie-equipement/categorie-equipement-list'},
  {path: 'categorie-equipement-list/categorie-equipement-edit/:id',    component: CategorieEquipementEditComponent }
];

@NgModule({
  declarations: [
    CategorieEquipementListComponent,NewCategorieEquipementSidebarComponent,CategorieEquipementEditComponent,CategorieEquipementViewComponent
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
  providers: [CategorieEquipementListService, CategorieEquipementEditService,CategorieEquipementViewService]
})
export class CategorieEquipementModule { }
