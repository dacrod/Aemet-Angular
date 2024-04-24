import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { InputSwitchModule } from 'primeng/inputswitch';
import { MessagesModule } from 'primeng/messages';
import { CheckboxModule } from 'primeng/checkbox';
import { TagModule } from 'primeng/tag';
import { ChartModule } from 'primeng/chart';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TabMenuModule,
    MenubarModule,
    PanelModule,
    TableModule,
    CalendarModule,
    RippleModule,
    InputSwitchModule,
    MessagesModule,
    CheckboxModule,
    TagModule,
    ChartModule,
    TabViewModule
  ],
  exports: [
    TabMenuModule,
    MenubarModule,
    PanelModule,
    TableModule,
    CalendarModule,
    RippleModule,
    SidebarModule,
    InputSwitchModule,
    MessagesModule,
    CheckboxModule,
    TagModule,
    ChartModule,
    TabViewModule
  ]
})
export class PrimeNgModule { }
