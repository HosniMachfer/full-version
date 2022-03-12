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

import { PDRListComponent } from './pdr-list/pdr-list.component';
import { PDREditComponent } from './pdr-edit/pdr-edit.component';
import { PDRViewComponent } from './pdr-view/pdr-view.component';
import { PDRNewComponent } from './pdr-new/pdr-new.component';
import { PDRListService } from 'app/main/apps/gmao/pdr/pdr-list/pdr-list.service';


import { PDREditService } from 'app/main/apps/gmao/pdr/pdr-edit/pdr-edit.service';
import { PDRNewService } from 'app/main/apps/gmao/pdr/pdr-new/pdr-new.service';
import{ PDRViewService } from 'app/main/apps/gmao/pdr/pdr-view/pdr-view.service';

import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { TranslateModule } from '@ngx-translate/core';

// routing
const routes: Routes = [
  {path: 'pdr-list',component: PDRListComponent  },
  {path: 'pdr-list/pdr-edit/:id',   component: PDREditComponent,
    resolve: {
      uls: PDREditService
    } 
  },
  {path: 'pdr-list/pdr-view/:id',   component: PDRViewComponent,
    resolve: {
      uls: PDRViewService
    }
  },
  {path: 'pdr-list/pdr-new',   component: PDRNewComponent,
  resolve: {
    uls: PDRNewService
  } 
},
  {path: 'pdr-list/pdr-view',  redirectTo: '/apps/pdr/pdr-list'},
  {path: 'pdr-list/pdr-edit',    redirectTo: '/apps/pdr/pdr-list' }
];

@NgModule({
  declarations: [
    PDRListComponent,PDREditComponent,PDRViewComponent,PDRNewComponent
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
    TranslateModule,
    ContentHeaderModule, CardSnippetModule
  ],
  providers: [PDRListService, PDREditService,PDRViewService,PDRNewService]
})
export class PDRModule { }
