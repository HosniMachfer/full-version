import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormRepeaterModule } from 'app/main/forms/form-repeater/form-repeater.module';
import { FormElementsModule } from 'app/main/forms/form-elements/form-elements.module';
import { FormLayoutModule } from 'app/main/forms/form-layout/form-layout.module';
import { FormValidationModule } from 'app/main/forms/form-validation/form-validation.module';
import { FormWizardModule } from 'app/main/forms/form-wizard/form-wizard.module';

import { TypePanneListComponent } from './type-panne/type-panne-list/type-panne-list.component';
import { TypePanneEditComponent } from './type-panne/type-panne-edit/type-panne-edit.component';
import { PlanningComponent } from './planning/planning.component';
import { CalendarModule } from '../calendar/calendar.module';
import { TypePanneViewComponent } from './type-panne/type-panne-view/type-panne-view.component';

import { ActionEditComponent } from './action/action-edit/action-edit.component';
import { ActionListComponent } from './action/action-list/action-list.component';
import { ActionViewComponent } from './action/action-view/action-view.component';
import { NewActionSidebarComponent } from './action/action-list/new-action-sidebar/new-action-sidebar.component';
import { NbrPannesComponent } from './nbr-pannes/nbr-pannes.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DateComponent } from './date/date.component';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { DelaiEntreLesPannesComponent } from './delai-entre-les-pannes/delai-entre-les-pannes.component';
import { DelaiDeReparationComponent } from './delai-de-reparation/delai-de-reparation.component';
import { TempsFctComponent } from './temps-fct/temps-fct.component';

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
    path: 'action',
    loadChildren: () => import('./action/action.module').then(m => m.ActionModule)
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
    path: 'intervention-curative',
    loadChildren: () => import('./Intervention/intervention.module').then(m => m.InterventionModule)
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
  ,
    {
    path: 'planning',
    loadChildren: () => import('./planning/planning.module').then(m => m.PlanningModule)
  },
  {
    path:'nbr-pannes',
    component:NbrPannesComponent ,
    data: { animation: 'home' }
  },
  {
    path:'delai-pannes',
    component:DelaiEntreLesPannesComponent ,
    data: { animation: 'home' }
  },
  {
    path:'delai-reparation',
    component:DelaiDeReparationComponent ,
    data: { animation: 'home' }
  },
  {
    path:'temps-fct',
    component:TempsFctComponent,
    data: { animation: 'home' }
  },

]

@NgModule({
  declarations: [
    DateComponent,
    DelaiEntreLesPannesComponent,
    DelaiDeReparationComponent,
    TempsFctComponent,

    NbrPannesComponent
  ],
  imports: [CommonModule,
     RouterModule.forChild(routes),
     FormElementsModule, 
     FormLayoutModule,
      FormWizardModule, 
      FormValidationModule,
       FormRepeaterModule,
       NgApexchartsModule,
       Ng2FlatpickrModule
      //CalendarModule
      ]
})
export class GmaoModule {}
