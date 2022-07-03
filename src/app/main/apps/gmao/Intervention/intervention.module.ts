import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterventionCurativeListComponent } from './interventionCurative/intervention-curative-list/intervention-curative-list.component';
import { NewInterventionCurativeSidebarComponent } from './interventionCurative/intervention-curative-list/new-intervention-curative-sidebar/new-intervention-curative-sidebar.component';
import { RouterModule, Routes } from '@angular/router';
import { CoreCommonModule } from '@core/common.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CorePipesModule } from '@core/pipes/pipes.module';
import { CoreDirectivesModule } from '@core/directives/directives';
import { InvoiceModule } from '../../invoice/invoice.module';
import { CoreSidebarModule } from '@core/components';
import { TranslateModule } from '@ngx-translate/core';


const routes: Routes = [
  {path: 'intervention-curative-list',component: InterventionCurativeListComponent  }
  // {path: 'categorie-equipement-list/categorie-equipement-edit/:id',   component: CategorieEquipementEditComponent,
  //   resolve: {
  //     uls: CategorieEquipementEditService
  //   } 
  // },
  // {path: 'categorie-equipement-list/categorie-equipement-view/:id',   component: CategorieEquipementViewComponent,
  //   resolve: {
  //     uls: CategorieEquipementViewService
  //   }
  // },
  // {path: 'categorie-equipement-list/categorie-equipement-view',  redirectTo: '/apps/categorie-equipement/categorie-equipement-list'},
  // {path: 'categorie-equipement-list/categorie-equipement-edit',    redirectTo: '/apps/categorie-equipement/categorie-equipement-list' }
];

@NgModule({
  declarations: [
    InterventionCurativeListComponent,
    NewInterventionCurativeSidebarComponent
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
})
export class InterventionModule { }
