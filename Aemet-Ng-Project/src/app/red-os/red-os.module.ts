import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { CalendarModule } from 'primeng/calendar';
import { GraphComponent } from './components/graph/graph.component';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [
    GraphComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    FormsModule,
    ChartModule,
    CalendarModule,
    DialogModule
  ],
  exports: [
    GraphComponent
  ]
})
export class RedOsModule { }
