import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { RippleModule } from 'primeng/ripple';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TabMenuModule,
    MenubarModule,
    PanelModule,
    TableModule,
    CalendarModule,
    RippleModule
  ],
  exports: [
    TabMenuModule,
    MenubarModule,
    PanelModule,
    TableModule,
    CalendarModule,
    RippleModule
  ]
})
export class PrimeNgModule { }
