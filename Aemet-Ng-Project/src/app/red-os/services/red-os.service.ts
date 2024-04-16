import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Luz } from '../models/red-os.model';

@Injectable({providedIn: 'root'})
export class RedosService {

    constructor(private httpClient: HttpClient) { }

    arrayTest?: Luz[];
    arrayHoras: number[] = []

    public url: string = "https://api.preciodelaluz.org/v1/prices/all?zone=PCB&date=15-04-2024";

    obtainRedosData () {
        return this.httpClient.get<Luz>( this.url )
            .pipe(
                map( res => {
                    this.arrayTest = Object.values(res);
                    console.log(this.arrayTest);
                    for (let i = 0; i < this.arrayTest.length; i++) {
                        this.arrayHoras?.push(this.arrayTest[i].price);
                    }
                    return this.arrayHoras;
                } )
            )
    }

}
