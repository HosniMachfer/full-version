import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormRepeaterModule } from 'app/main/forms/form-repeater/form-repeater.module';
import { FormElementsModule } from 'app/main/forms/form-elements/form-elements.module';
import { FormLayoutModule } from 'app/main/forms/form-layout/form-layout.module';
import { FormValidationModule } from 'app/main/forms/form-validation/form-validation.module';
import { FormWizardModule } from 'app/main/forms/form-wizard/form-wizard.module';
import { CycleDeVieDechetModule } from 'app/main/apps/gestion-dechets/cycle-de-vie-dechet/cycle-de-vie-dechet.module';


const routes: Routes = [
  {
    path: 'tier',
    loadChildren: () => import('./tier/tier.module').then(m => m.TierModule)
  },
  {
    path: 'type-tier',
    loadChildren: () => import('./type-tier/type-tier.module').then(m => m.TypeTierModule)
  },
  {
    path: 'usine',
    loadChildren: () => import('./usine/usine.module').then(m => m.UsineModule)
  },
  {
    path: 'collecteur',
    loadChildren: () => import('./collecteur/collecteur.module').then(m => m.CollecteurModule)
  },
  {
    path: 'recycleur',
    loadChildren: () => import('./recycleur/recycleur.module').then(m => m.RecycleurModule)
  },
  {
    path: 'type-mouvement',
    loadChildren: () => import('./type-mouvement/type-mouvement.module').then(m => m.TypeMouvementModule)
  },
  {
    path: 'unite',
    loadChildren: () => import('./unite/unite.module').then(m => m.UniteModule)
  }
]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes),FormElementsModule, FormLayoutModule, FormWizardModule, FormValidationModule, FormRepeaterModule,CycleDeVieDechetModule]
})
export class GestionDechetsModule {}
