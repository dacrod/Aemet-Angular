import { Component } from '@angular/core';
import { PriceService } from '../../services/prices.service';

@Component({
  selector: 'dashboard-prices-graph',
  templateUrl: './graph.component.html'
})
export class GraphComponent {
  pricePerHour: number[] = [];
  data: any;
  actualPrice!: number;
  date!: Date;

  constructor ( private redOsService: PriceService ) {}

  options = {
    maintainAspectRatio: false,
    aspectRatio: 0.6
  }

  ngOnInit(): void {
    this.date = new Date();
    this.redOsService.obtainActualPrice()
      .subscribe( price => {
        this.actualPrice = price;
      } );

    this.redOsService.obtainRedosData()
      .subscribe( pricesPerHour => {
        this.pricePerHour = pricesPerHour;
        this.data = {
          labels: ['00.00', '01.00', '02.00', '03.00', '04.00', '05.00', '06.00', '07.00', '08.00', '09.00', '10.00', '11.00', '12.00', '13.00', '14.00', '15.00', '16.00', '17.00', '18.00', '19.00', '20.00', '21.00', '22.00', '23.00',],
          datasets: [
            {
              label: `Precios MWh (${this.date.getFullYear()}-${this.date.getUTCMonth()}-${this.date.getDate()})`,
              data: this.pricePerHour,
              borderColor: "#58FF33",
              fill: false,
              tension: 0.4
            },
    
            ]
          };
      } );
  }
}
