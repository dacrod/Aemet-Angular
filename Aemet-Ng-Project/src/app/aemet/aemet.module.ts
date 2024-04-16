import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphComponent } from './components/graph/graph.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { CalendarModule } from 'primeng/calendar';
import { RedOsModule } from '../red-os/red-os.module';




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
    RedOsModule
  ],
  exports: [
    GraphComponent
  ]
})
export class AemetModule { }
