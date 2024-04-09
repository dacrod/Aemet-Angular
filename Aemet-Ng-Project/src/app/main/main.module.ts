import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ConfigPageComponent } from './pages/config-page/config-page.component';
import { MainRoutingModule } from './main-routing.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    MainPageComponent,
    ConfigPageComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    PrimeNgModule
  ]
})
export class MainModule { }
