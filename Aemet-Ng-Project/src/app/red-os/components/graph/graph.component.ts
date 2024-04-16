import { Component, OnInit } from '@angular/core';
import { RedosService } from '../../services/red-os.service';

@Component({
  selector: 'redos-graph',
  templateUrl: './graph.component.html'
})
export class GraphComponent implements OnInit {

  constructor ( private redOsService: RedosService ) {}
  arrayHoras  : number[] = [];
  data: any;

  options = {
    maintainAspectRatio: false,
    aspectRatio: 0.6
  }

  ngOnInit(): void {
    this.redOsService.obtainRedosData()
      .subscribe( res => {
        this.arrayHoras = res;
        console.log(this.arrayHoras);
      } );
      this.data = {
        labels: ['00.00', '01.00', '02.00', '03.00', '04.00', '05.00', '06.00', '07.00', '08.00', '09.00', '10.00', '11.00', '12.00', '13.00', '14.00', '15.00', '16.00', '17.00', '18.00', '19.00', '20.00', '21.00', '22.00', '23.00',],
        datasets: [
            {
                label: `Precio del día actual`,
                data: this.arrayHoras,
                borderColor: "#58FF33",
                fill: false,
                tension: 0.4
            },

        ]
      };
  }



}
