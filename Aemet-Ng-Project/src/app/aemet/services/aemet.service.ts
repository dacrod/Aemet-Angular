import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Weather } from '../models/weather.model';
import { unsubscribe } from 'diagnostics_channel';

@Injectable({providedIn: 'root'})
export class AemetService {

  constructor (private http: HttpClient) { }

  public urlStart: string = "https://api.weatherapi.com/v1/history.json?q=41.65518%2C%20-4.72372&dt=";
  public urlEnd: string = "&lang=es&key=a95366f447d743938d8150729241504%20";
  arrayTemps: number[] = [];
  arrayHoras: string[] = [];

  obtainAemetData ( fecha?: string ): number[]  {
    this.http.get<Weather>( this.urlStart + fecha + this.urlEnd )
      .subscribe( res => {
        for (let i = 0; i < res.forecast.forecastday[0].hour.length; i++) {
          this.arrayTemps.push(res.forecast.forecastday[0].hour[i].temp_c);
        }
      } );
      return this.arrayTemps;
  }
}

//https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/168/?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkYW5pZWxjdWFyZW50YWxlc29AZ21haWwuY29tIiwianRpIjoiMDE2N2YzODctMGY3My00Y2ZhLWI4NWEtNjRjNTY3MmE1NjBjIiwiaXNzIjoiQUVNRVQiLCJpYXQiOjE3MDQ3OTgwMTcsInVzZXJJZCI6IjAxNjdmMzg3LTBmNzMtNGNmYS1iODVhLTY0YzU2NzJhNTYwYyIsInJvbGUiOiIifQ.7iXh8fQr2Oyc8RDW3kYeTPG7ecHHcVLOMZ-cmIW3jGw
