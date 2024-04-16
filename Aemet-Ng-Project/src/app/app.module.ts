import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { PanelMenuModule } from 'primeng/panelmenu';
import { SplitterModule } from 'primeng/splitter';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AemetModule } from './aemet/aemet.module';
import { FormsModule } from '@angular/forms';
import { RedOsModule } from './red-os/red-os.module';
import { PanelModule } from 'primeng/panel';
import { MixedModule } from './mixed/mixed.module';
import { TabViewModule } from 'primeng/tabview';
import { PrimeNgModule } from './prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PanelMenuModule,
    SplitterModule,
    SharedModule,
    BrowserAnimationsModule,
    AemetModule,
    FormsModule,
    RedOsModule,
    PanelModule,
    MixedModule,
    TabViewModule,
    PrimeNgModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
