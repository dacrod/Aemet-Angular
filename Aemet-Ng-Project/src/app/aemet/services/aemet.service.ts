import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AemetService {

  constructor (private http: HttpClient) { }

  public url: string = "https://api.openweathermap.org/data/2.5/weather?lat=41.65518&lon=-4.72372&appid=6d310f19881e08b5af0dcc284118f32c";

  obtainAemetData () {
    return this.http.get( this.url )
            .subscribe( res => {
              console.log(res);
            } )
  }
}

//https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/168/?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkYW5pZWxjdWFyZW50YWxlc29AZ21haWwuY29tIiwianRpIjoiMDE2N2YzODctMGY3My00Y2ZhLWI4NWEtNjRjNTY3MmE1NjBjIiwiaXNzIjoiQUVNRVQiLCJpYXQiOjE3MDQ3OTgwMTcsInVzZXJJZCI6IjAxNjdmMzg3LTBmNzMtNGNmYS1iODVhLTY0YzU2NzJhNTYwYyIsInJvbGUiOiIifQ.7iXh8fQr2Oyc8RDW3kYeTPG7ecHHcVLOMZ-cmIW3jGw
