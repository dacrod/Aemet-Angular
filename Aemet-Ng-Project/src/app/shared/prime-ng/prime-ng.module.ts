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
import { PanelMenuModule } from 'primeng/panelmenu';
import { SplitterModule } from 'primeng/splitter';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ChipModule } from 'primeng/chip';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { ButtonModule } from  'primeng/button'


@NgModule({
  declarations: [],
  imports: [
    AnimateOnScrollModule,
    ChipModule,
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
    TabViewModule,
    PanelMenuModule,
    SplitterModule,
    AvatarModule,
    AvatarGroupModule,
    ButtonModule
  ],
  exports: [
    AnimateOnScrollModule,
    AvatarGroupModule,
    AvatarModule,
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
    TabViewModule,
    PanelMenuModule,
    SplitterModule,
    ChipModule,
    ButtonModule
  ]
})
export class PrimeNgModule { }
