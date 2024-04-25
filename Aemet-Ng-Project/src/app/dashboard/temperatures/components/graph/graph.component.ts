import { Component } from '@angular/core';
import { TemperaturesService } from '../../services/temperatures.service';

@Component({
  selector: 'dashboard-temperatures-graph',
  templateUrl: './graph.component.html',
  styles: ``
})
export class GraphComponent {
  date!: Date;
  year: string = '';
  month: string = '';
  day: string = '';
  data: any;
  maxDate: Date = new Date();

  arrayTemps  : number[] = [];
  arrayPrices : number[] = [];
  arrayHours  : number[] = [];

  options = {
    maintainAspectRatio: true,
    aspectRatio: 1.5
  }

  constructor ( private aemetService: TemperaturesService ) {
    this.maxDate.setDate(this.maxDate.getDate() - 1);
  }

  ngOnInit(): void {
    this.date = new Date();
    this.date.setDate(this.date.getDate() - 1);

    this.year = this.date.getFullYear().toString();
    this.month = ( this.date.getMonth() + 1 ).toString();
    this.day = ( this.date.getDate() ).toString();

    this.getData();
  }

  onDateChange(event: Date) {
    this.year = event.getFullYear().toString();
    this.month = (event.getMonth() + 1).toString();
    this.day = event.getDate().toString();

    this.getData();
  }

  getData() {
    this.aemetService.obtainAemetData( this.year, this.month, this.day  )
      .subscribe( res=> {
        this.arrayTemps = res;
        this.data = {
          labels: ['00.00', '01.00', '02.00', '03.00', '04.00', '05.00', '06.00', '07.00', '08.00', '09.00', '10.00', '11.00', '12.00', '13.00', '14.00', '15.00', '16.00', '17.00', '18.00', '19.00', '20.00', '21.00', '22.00', '23.00',],
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
