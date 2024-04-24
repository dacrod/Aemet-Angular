import { Component } from '@angular/core';
import { PriceService } from '../../../prices/services/prices.service';
import { AemetService } from '../../../../aemet/services/aemet.service';
import { Registro } from '../../models/registro.model';
import { Message } from 'primeng/api';

@Component({
  selector: 'dashboard-general-table',
  templateUrl: './table.component.html'
})
export class TableComponent {
  date!: Date;
  year: string = '';
  month: string = '';
  day: string = '';
  first: number = 0;
  rows: number = 7;
  checked: boolean = false;
  messages1!: Message[];
  // actualDate!: Date;

  arrayTemps: number[] = [];
  pricesPerHour: number[] = [];
  arrayHoras: string[] = ['00.00', '01.00', '02.00', '03.00', '04.00', '05.00', '06.00', '07.00', '08.00', '09.00', '10.00', '11.00', '12.00', '13.00', '14.00', '15.00', '16.00', '17.00', '18.00', '19.00', '20.00', '21.00', '22.00', '23.00'];
  registros: Registro[] = [];

  maxDate!: Date;;

  constructor(
    private aemetService: AemetService,
    private redosService: PriceService
  ) {
  }

  ngOnInit(): void {
    this.maxDate = new Date();
    this.maxDate.setHours(0,0,0,0);
    // this.actualDate = new Date();
    // this.actualDate.setDate(this.date.getDate() - 1);
    this.date = new Date();

    this.year = this.date.getFullYear().toString();
    this.month = (this.date.getMonth() + 1).toString();
    this.day = (this.date.getDate()).toString();

    this.aemetService.obtainAemetData(this.year, this.month, this.day)
      .subscribe(res => {
        this.redosService.obtainRedosData()
          .subscribe( prices => {
            this.pricesPerHour = prices;
            this.registros = [];
            this.arrayTemps = res;
            for (let i = 0; i < this.arrayTemps.length; i++) {
              this.registros.push(
                {
                  dia: "Dia prueba",
                  hora: `${this.arrayHoras[i]}`,
                  temperatura: `${this.arrayTemps[i]} º`,
                  precioMWH: `${this.pricesPerHour[i]}`
                }
              )
            }
          } )
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
    this.date = event;

    if (this.date < this.maxDate) {
      this.checked = false;
    }

    this.aemetService.obtainAemetData(this.year, this.month, this.day)
      .subscribe(res => {
        this.registros = [];
        this.redosService.obtainRedosData()
          .subscribe( prices => {
            this.pricesPerHour = prices;
          } )
        this.registros = [];
        this.arrayTemps = res;
        for (let i = 0; i < this.arrayTemps.length; i++) {
          this.registros.push(
            {
              dia: "Dia prueba",
              hora: `${this.arrayHoras[i]}`,
              temperatura: `${this.arrayTemps[i]} º`,
              precioMWH: `${this.pricesPerHour[i]}`
            }
          )
        }
      })
  }

  onSwitchChange() {

  }

  priceRange(price: number) {
    let resultado: string;
    if( price < 70 ) {
      resultado = 'success';
    } else if ( price >= 70 && price < 100) {
      resultado = 'warning';
    } else {
      resultado = 'danger';
    }
    return resultado;
  }
}
