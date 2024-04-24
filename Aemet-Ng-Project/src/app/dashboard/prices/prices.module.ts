import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphComponent } from './components/graph/graph.component';
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    GraphComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    GraphComponent
  ]
})
export class PricesModule { }
