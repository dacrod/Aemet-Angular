import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { TableComponent } from './components/table/table.component';



@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    TableComponent
  ]
})
export class MixedModule { }
