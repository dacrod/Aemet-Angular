import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Luz } from '../models/prices.model';
import { Observable, map } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PriceService {

    constructor(private httpClient: HttpClient) { }

    arrayTest?: Luz[];
    arrayHoras: number[] = []
    actualPrice: number = 0;

    public urlLuzDia: string = "https://api.preciodelaluz.org/v1/prices/all?zone=PCB";
    public urlActualPrice: string = "https://api.preciodelaluz.org/v1/prices/now?zone=PCB";

    obtainRedosData () {
        return this.httpClient.get<Luz>( this.urlLuzDia )
          .pipe(
            map( res => {
              this.arrayTest = Object.values(res);
              for (let i = 0; i < this.arrayTest.length; i++) {
                this.arrayHoras?.push(this.arrayTest[i].price);
              }
              return this.arrayHoras;
            } )
          )
    }

    obtainActualPrice (): Observable<number> {
      return this.httpClient.get<Luz>( this.urlActualPrice )
        .pipe(
          map ( res => {
            this.actualPrice = res.price;
            return this.actualPrice;
          } )
        )
    }
    
}