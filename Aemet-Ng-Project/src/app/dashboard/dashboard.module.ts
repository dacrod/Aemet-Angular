import { NgModule } from '@angular/core';
import { PrimeNgModule } from '../shared/prime-ng/prime-ng.module';
import { DashboardComponent } from './dashboard.component';
import { GraphComponent } from './temperatures/components/graph/graph.component';
import { TemperaturesModule } from './temperatures/temperatures.module';
import { GeneralModule } from './general/general.module';
import { PricesModule } from './prices/prices.module';
import { SpeedDialModule } from 'primeng/speeddial';


@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        PrimeNgModule,
        TemperaturesModule,
        GeneralModule,
        PricesModule,
        SpeedDialModule    ],
    exports: [
        DashboardComponent
    ]
})
export class DashboardModule { }
