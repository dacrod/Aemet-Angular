import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { LinearGraphComponent } from './components/linear-graph/linear-graph.component';
import { ChartModule } from 'primeng/chart';


@NgModule({
  declarations: [
    LinearGraphComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    ChartModule
  ],
  exports: [
    LinearGraphComponent
  ]
})
export class SharedModule { }
