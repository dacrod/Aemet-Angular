import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { ChartModule } from 'primeng/chart';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    ChartModule
  ],
  exports: [
  ]
})
export class SharedModule { }
