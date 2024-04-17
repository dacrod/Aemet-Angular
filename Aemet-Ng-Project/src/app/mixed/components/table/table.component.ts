import { Component, OnInit } from '@angular/core';
import { AemetService } from '../../../aemet/services/aemet.service';
import { Registro } from '../../models/registro.model';

@Component({
  selector: 'mixed-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  date!: Date;
  year: string = '';
  month: string = '';
  day: string = '';
  first: number = 0;
  rows: number = 7;

  arrayTemps: number[] = [];
  arrayHoras: string[] = ['00.00', '01.00', '02.00', '03.00', '04.00', '05.00', '06.00', '07.00', '08.00', '09.00', '10.00', '11.00', '12.00', '13.00', '14.00', '15.00', '16.00', '17.00', '18.00', '19.00', '20.00', '21.00', '22.00', '23.00'];
  registros: Registro[] = [];

  maxDate: Date = new Date();

  constructor(
    private aemetService: AemetService
  ) {
    this.maxDate.setDate(this.maxDate.getDate() - 1);
  }

  ngOnInit(): void {
    this.date = new Date();
    this.date.setDate(this.date.getDate() - 1);

    this.year = this.date.getFullYear().toString();
    this.month = (this.date.getMonth() + 1).toString();
    this.day = (this.date.getDate()).toString();

    this.aemetService.obtainAemetData(this.year, this.month, this.day)
      .subscribe(res => {
        this.registros = [];
        this.arrayTemps = res;
        for (let i = 0; i < this.arrayTemps.length; i++) {
          this.registros.push(
            {
              dia: "Dia prueba",
              hora: `${this.arrayHoras[i]}`,
              temperatura: `${this.arrayTemps[i]} º`,
              precioMWH: ""
            }
          )
        }
      })
  }

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }

  onDateChange(event: Date) {
    this.year = event.getFullYear().toString();
    this.month = (event.getMonth() + 1).toString();
    this.day = event.getDate().toString();

    this.aemetService.obtainAemetData(this.year, this.month, this.day)
      .subscribe(res => {
        this.registros = [];
        this.arrayTemps = res;
        for (let i = 0; i < this.arrayTemps.length; i++) {
          this.registros.push(
            {
              dia: "Dia prueba",
              hora: `${this.arrayHoras[i]}`,
              temperatura: `${this.arrayTemps[i]} º`,
              precioMWH: ""
            }
          )
        }
      })
  }
}
