import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateComponent } from './date.component';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DateComponent],
  imports: [
    CommonModule,
    Ng2FlatpickrModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    DateComponent
  ]
})
export class DateModule { }
