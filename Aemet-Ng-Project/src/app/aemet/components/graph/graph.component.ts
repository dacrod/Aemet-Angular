import { Component, Input, OnInit } from '@angular/core';
import { AemetService } from '../../services/aemet.service';

@Component({
  selector: 'aemet-graph',
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.css'
})
export class GraphComponent implements OnInit{

  date!: Date;
  year: string = '';
  month: string = '';
  day: string = '';

  arrayTemps : number[] = [];
  arrayHoras : number[] = [];

  data: any;

  options = {
    maintainAspectRatio: false,
    aspectRatio: 0.6
  }

  constructor ( private aemetService: AemetService ) {}

  ngOnInit(): void {

  }

  onDateChange() {
    console.log(this.date);

    if( this.date == undefined ) return;

    this.year = this.date.getFullYear().toString();
    this.month = (this.date.getMonth() + 1).toString();
    this.day = this.date.getDay().toString();

    this.arrayTemps = this.aemetService.obtainAemetData( `${this.year}-${this.month}-${this.day}`  );

    // console.log(this.arrayTemps);
    // console.log(this.arrayHoras);

    this.data = {
      labels: ['00.00', '01.00', '02.00', '03.00', '04.00', '05.00', '06.00', '07.00', '08.00', '09.00', '10.00', '11.00', '12.00', '13.00', '14.00', '15.00', '16.00', '17.00', '18.00', '19.00', '20.00', '21.00', '22.00', '23.00',],
      datasets: [
          {
              label: 'First Dataset',
              data: this.arrayTemps,
              borderColor: "#FF4000",
              fill: false,
              tension: 0.4
          }
      ]
    };
  }

}
