import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { ActionListComponent } from './action-list/action-list.component';
import { NewActionSidebarComponent } from './action-list/new-action-sidebar/new-action-sidebar.component';
import { ActionEditComponent } from './action-edit/action-edit.component';
import { ActionViewComponent } from './action-view/action-view.component';
import { MarqueViewComponent } from '../marque/marque-view/marque-view.component';
import { ActionEditService } from './action-edit/action-edit.service';
import { ActionViewService } from './action-view/action-view.service';

import { ActionListService } from './action-list/action-list.service';

// routing
const routes: Routes = [
  {path: 'action-list',component: ActionListComponent  },
  {path: 'action-list/action-edit/:id',   component: ActionEditComponent,
    resolve: {
      uls: ActionEditService
    } 
  },
  {path: 'action-list/action-view/:id',   component: ActionViewComponent,
    resolve: {
      uls: ActionViewService
    }
  },
  {path: 'action-list/action-view',  redirectTo: '/apps/action/action-list'},
  {path: 'action-list/action-edit',    redirectTo: '/apps/action/action-list' }
];

@NgModule({
  declarations: [
    ActionListComponent,NewActionSidebarComponent,ActionEditComponent,ActionViewComponent
    
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
    
  ],
  
  providers: [ActionListService,ActionEditService,ActionViewService]
  
  
})
export class ActionModule { }
