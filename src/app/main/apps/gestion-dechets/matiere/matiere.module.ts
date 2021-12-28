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

import { MatiereListComponent } from './matiere-list/matiere-list.component';
import { MatiereEditComponent } from './matiere-edit/matiere-edit.component';
import { MatiereViewComponent } from './matiere-view/matiere-view.component';
import { MatiereListService } from 'app/main/apps/gestion-dechets/matiere/matiere-list/matiere-list.service';

import { NewMatiereSidebarComponent } from 'app/main/apps/gestion-dechets/matiere/matiere-list/new-matiere-sidebar/new-matiere-sidebar.component';
import { MatiereEditService } from 'app/main/apps/gestion-dechets/matiere/matiere-edit/matiere-edit.service';
import { MatiereViewService } from 'app/main/apps/gestion-dechets/matiere/matiere-view/matiere-view.service';

import { TranslateModule } from '@ngx-translate/core';

// routing
const routes: Routes = [
  {path: 'matiere-list',component: MatiereListComponent  },
  {path: 'matiere-list/matiere-edit/:id',   component: MatiereEditComponent,
    resolve: {
      uls: MatiereEditService
    } 
  },
  {path: 'matiere-list/matiere-view/:id',   component: MatiereViewComponent,
    resolve: {
      uls: MatiereViewService
    }
  },
  {path: 'matiere-list/matiere-view',  redirectTo: '/apps/matiere/matiere-list'},
  {path: 'matiere-list/matiere-edit',    redirectTo: '/apps/matiere/matiere-list' }
];

@NgModule({
  declarations: [
    MatiereListComponent,NewMatiereSidebarComponent,MatiereEditComponent,MatiereViewComponent
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
  providers: [MatiereListService, MatiereEditService,MatiereViewService]
})
export class MatiereModule { }
