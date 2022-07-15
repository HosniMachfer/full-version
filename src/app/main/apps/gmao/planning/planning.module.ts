import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanningComponent } from './planning.component';
import { RouterModule, Routes } from '@angular/router';
import { CalendarModule } from '../../calendar/calendar.module';

const routes: Routes = [
  {path: 'planning',component: PlanningComponent  }
]

@NgModule({
  declarations: [PlanningComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CalendarModule
  ],
  exports: [PlanningComponent]
})
export class PlanningModule { }
