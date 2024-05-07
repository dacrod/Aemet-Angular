import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SharedModule } from 'primeng/api';
import { PrimeNgModule } from '../shared/prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PrimeNgModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
