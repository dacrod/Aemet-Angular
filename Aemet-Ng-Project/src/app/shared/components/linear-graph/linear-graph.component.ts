import { Component, OnInit } from '@angular/core';
import { AemetService } from '../../../aemet/services/aemet.service';
import { RedosService } from '../../../red-os/services/red-os.service';
import { horas } from '../../constants/constants';

@Component({
  selector: 'shared-linear-graph',
  templateUrl: './linear-graph.component.html'
})
export class LinearGraphComponent implements OnInit {
  
  //* Calendar Variables
  date!: Date;
  year: string = '';
  month: string = '';
  day: string = '';
  maxDate: Date = new Date();

  //* Temperatures Variables
  arrayTemps  : number[] = [];

  //* Prices Variables
  pricePerHour: number[] = [];
  actualPrice!: number;

  //* Graph Variables
  data!: Object;

  constructor (
    private aemetService: AemetService,
    private redosService: RedosService
  ) {}

  ngOnInit(): void {
    this.getTemperaturesInfo();
    this.getPricesInfo();
  }

  getPricesInfo() {
    this.redosService.obtainActualPrice()
      .subscribe( price => {
        this.actualPrice = price;
      } );

    this.redosService.obtainRedosData()
      .subscribe( pricesPerHour => {
        this.pricePerHour = pricesPerHour;
        this.data = {
          labels: horas,
          datasets: [
            {
              label: `Precio del día actual`,
              data: this.pricePerHour,
              borderColor: "#58FF33",
              fill: false,
              tension: 0.4
            },
          ]
        };
      });
  }

  getTemperaturesInfo() {
    this.aemetService.obtainAemetData( this.year, this.month, this.day  )
      .subscribe( res=> {
        this.arrayTemps = res;
        this.data = {
          labels: horas,
          datasets: [
              {
                  label: `Temperatura del ${this.year}-${this.month}-${this.day}` ,
                  data: this.arrayTemps,
                  borderColor: "#FF4000",
                  fill: false,
                  tension: 0.4
              }
          ]
        };
      })
  }

}
