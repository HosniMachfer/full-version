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

import { ConteneurListComponent } from './conteneur-list/conteneur-list.component';
import { ConteneurEditComponent } from './conteneur-edit/conteneur-edit.component';
import { ConteneurViewComponent } from './conteneur-view/conteneur-view.component';
import { ConteneurListService } from 'app/main/apps/gestion-dechets/conteneur/conteneur-list/conteneur-list.service';

import { NewConteneurSidebarComponent } from 'app/main/apps/gestion-dechets/conteneur/conteneur-list/new-conteneur-sidebar/new-conteneur-sidebar.component';
import { ConteneurEditService } from 'app/main/apps/gestion-dechets/conteneur/conteneur-edit/conteneur-edit.service';
import{ ConteneurViewService } from 'app/main/apps/gestion-dechets/conteneur/conteneur-view/conteneur-view.service';

import { TranslateModule } from '@ngx-translate/core';

import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { MvtstockModule } from 'app/main/apps/gestion-dechets/mvtstock/mvtstock.module';

// routing
const routes: Routes = [
  {path: 'conteneur-list',component: ConteneurListComponent  },
  {path: 'conteneur-list/conteneur-edit/:id',   component: ConteneurEditComponent,
    resolve: {
      uls: ConteneurEditService
    } 
  },
  {path: 'conteneur-list/conteneur-view/:id',   component: ConteneurViewComponent,
    resolve: {
      uls: ConteneurViewService
    }
  },
  {path: 'conteneur-list/conteneur-view',  redirectTo: '/apps/conteneur/conteneur-list'},
  {path: 'conteneur-list/conteneur-edit',    redirectTo: '/apps/conteneur/conteneur-list' }
];

@NgModule({
  declarations: [
    ConteneurListComponent,NewConteneurSidebarComponent,ConteneurEditComponent,ConteneurViewComponent
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
    ContentHeaderModule,
    MvtstockModule
  ],
  providers: [ConteneurListService, ConteneurEditService,ConteneurViewService]
})
export class ConteneurModule { }
