import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormRepeaterModule } from 'app/main/forms/form-repeater/form-repeater.module';
import { FormElementsModule } from 'app/main/forms/form-elements/form-elements.module';
import { FormLayoutModule } from 'app/main/forms/form-layout/form-layout.module';
import { FormValidationModule } from 'app/main/forms/form-validation/form-validation.module';
import { FormWizardModule } from 'app/main/forms/form-wizard/form-wizard.module';

const routes: Routes = [
  {
    path: 'machine',
    loadChildren: () => import('./machine/machine.module').then(m => m.MachineModule)
  },
  {
    path: 'pdr',
    loadChildren: () => import('./pdr/pdr.module').then(m => m.PDRModule)
  },
  {
    path: 'marque',
    loadChildren: () => import('./marque/marque.module').then(m => m.MarqueModule)
  },
  {
    path: 'localite',
    loadChildren: () => import('./localite/localite.module').then(m => m.LocaliteModule)
  },
  {
    path: 'emplacement',
    loadChildren: () => import('./emplacement/emplacement.module').then(m => m.EmplacementModule)
  },
  {
    path: 'categorie-equipement',
    loadChildren: () => import('./categorie-equipement/categorie-equipement.module').then(m => m.CategorieEquipementModule)
  },
  {
    path: 'famille',
    loadChildren: () => import('./famille/famille.module').then(m => m.FamilleModule)
  },
  {
    path: 'unite',
    loadChildren: () => import('./unite/unite.module').then(m => m.UniteModule)
  },
  {
    path: 'etat-actuel',
    loadChildren: () => import('./etat-actuel/etat-actuel.module').then(m => m.EtatActuelModule)
  }
  ,
  {
    path: 'etat-machine',
    loadChildren: () => import('./etat-machine/etat-machine.module').then(m => m.EtatMachineModule)
  }
]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes),FormElementsModule, FormLayoutModule, FormWizardModule, FormValidationModule, FormRepeaterModule]
})
export class GmaoModule {}
