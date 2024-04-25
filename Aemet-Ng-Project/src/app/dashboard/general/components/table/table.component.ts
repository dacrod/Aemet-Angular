import { Component } from '@angular/core';
import { PriceService } from '../../../prices/services/prices.service';
import { Registro } from '../../models/registro.model';
import { TemperaturesService } from '../../../temperatures/services/temperatures.service';
import { hours } from '../../../../shared/constants/constants';

@Component({
  selector: 'dashboard-general-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  date!: Date;
  maxDate!: Date;
  year: string = '';
  month: string = '';
  day: string = '';
  first: number = 0;
  rows: number = 7;
  checked: boolean = false;

  arrayTemps: number[] = [];
  pricesPerHour: number[] = [];
  registros: Registro[] = [];

  constructor(
    private temperaturesService: TemperaturesService,
    private redosService: PriceService
  ) {
  }

  ngOnInit(): void {
    this.maxDate = new Date();
    this.maxDate.setHours(0,0,0,0);
    this.date = new Date();

    this.year = this.date.getFullYear().toString();
    this.month = (this.date.getMonth() + 1).toString();
    this.day = (this.date.getDate()).toString();

    this.temperaturesService.obtainAemetData(this.year, this.month, this.day)
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
                  hora: `${hours[i]}`,
                  temperatura: this.arrayTemps[i],
                  precioMWH: `${this.pricesPerHour[i]}`
                }
              )
            }
          })
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

    this.temperaturesService.obtainAemetData(this.year, this.month, this.day)
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
              hora: `${hours[i]}`,
              temperatura: this.arrayTemps[i],
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
