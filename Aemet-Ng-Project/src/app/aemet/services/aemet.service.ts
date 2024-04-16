import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from '../models/weather.model';
import { Observable, map } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AemetService {

  constructor (private http: HttpClient) { }

  public urlStart: string = "https://api.weatherapi.com/v1/history.json?q=41.65518%2C%20-4.72372&dt=";
  public urlEnd: string = "&lang=es&key=a95366f447d743938d8150729241504%20";
  arrayTemps: number[] = [];
  arrayHoras: string[] = [];

  obtainAemetData ( year: string, month: string, day: string ): Observable<number[]>  {
    if(+month < 10 && +day < 10) {
      month = `0${month}`;
      day = `0${day}`;
    } else if ( +month < 10 ) {
      month = `0${month}`;
    } else if ( +day < 10 ) {
      day = `0${day}`;
    }

    return this.http.get<Weather>( this.urlStart + `${year}-${month}-${day}` + this.urlEnd )
      .pipe(
        map( res => {
          this.arrayTemps = [];
          for (let i = 0; i < res.forecast.forecastday[0].hour.length; i++) {
            this.arrayTemps.push(res.forecast.forecastday[0].hour[i].temp_c);
          }
          return this.arrayTemps;
        })
      )
  }
}
