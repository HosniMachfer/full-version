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
  },
  {
    path: 'dechet',
    loadChildren: () => import('./dechet/dechet.module').then(m => m.DechetModule)
  },
  {
    path: 'etat-famille',
    loadChildren: () => import('./etat-famille/etat-famille.module').then(m => m.EtatFamilleModule)
  },
  {
    path: 'etat-conteneur',
    loadChildren: () => import('./etat-conteneur/etat-conteneur.module').then(m => m.EtatConteneurModule)
  },
  {
    path: 'etat-magasin',
    loadChildren: () => import('./etat-magasin/etat-magasin.module').then(m => m.EtatMagasinModule)
  },
  {
    path: 'etat-mouvement',
    loadChildren: () => import('./etat-mouvement/etat-mouvement.module').then(m => m.EtatMouvementModule)
  },
  {
    path: 'famille',
    loadChildren: () => import('./famille/famille.module').then(m => m.FamilleModule)
  },
  {
    path: 'magasin',
    loadChildren: () => import('./magasin/magasin.module').then(m => m.MagasinModule)
  },
  {
    path: 'matiere',
    loadChildren: () => import('./matiere/matiere.module').then(m => m.MatiereModule)
  },
  {
    path: 'mouvement',
    loadChildren: () => import('./mouvement/mouvement.module').then(m => m.MouvementModule)
  },
  {
    path: 'mvtstock',
    loadChildren: () => import('./mvtstock/mvtstock.module').then(m => m.MvtstockModule)
  },
  {
    path: 'fournisseur',
    loadChildren: () => import('./fournisseur/fournisseur.module').then(m => m.FournisseurModule)
  }
]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes),FormElementsModule, FormLayoutModule, FormWizardModule, FormValidationModule, FormRepeaterModule,CycleDeVieDechetModule]
})
export class GestionDechetsModule {}
