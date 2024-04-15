import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphComponent } from './components/graph/graph.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';




@NgModule({
  declarations: [
    GraphComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    FormsModule,
    ChartModule
  ],
  exports: [
    GraphComponent
  ]
})
export class AemetModule { }
