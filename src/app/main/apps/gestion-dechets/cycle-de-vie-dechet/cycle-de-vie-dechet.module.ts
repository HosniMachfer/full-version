import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { NgSelectModule } from '@ng-select/ng-select';

import { CoreCommonModule } from '@core/common.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { CoreDirectivesModule } from '@core/directives/directives';

import { CycleDeVieDechetComponent } from 'app/main/apps/gestion-dechets/cycle-de-vie-dechet/cycle-de-vie-dechet.component';

const routes: Routes = [
  {
    path: 'cycle-de-vie-dechet',
    component: CycleDeVieDechetComponent,
    data: { animation: 'wizard' }
  }
];

@NgModule({
  declarations: [CycleDeVieDechetComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreCommonModule,
    ContentHeaderModule,
    CardSnippetModule,
    FormsModule,
    CoreDirectivesModule,
    NgSelectModule
  ]
})
export class CycleDeVieDechetModule {}
