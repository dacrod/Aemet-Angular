import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Luz } from '../models/red-os.model';

@Injectable({providedIn: 'root'})
export class RedosService {

    constructor(private httpClient: HttpClient) { }

    arrayTest?: Luz[];
    arrayHoras: number[] = []
    actualPrice: number = 0;

    public urlLuzDia: string = "https://api.preciodelaluz.org/v1/prices/all?zone=PCB&date=15-04-2024";
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
