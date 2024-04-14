import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TabMenuModule,
    MenubarModule,
    PanelModule,
    TableModule
  ],
  exports: [
    TabMenuModule,
    MenubarModule,
    PanelModule,
    TableModule
  ]
})
export class PrimeNgModule { }
