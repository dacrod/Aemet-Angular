import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AemetService {

  constructor (private http: HttpClient) { }

  public url: string = "https://api.openweathermap.org/data/2.5/weather?lat={41.65518}&lon={-4.72372}&appid={6d310f19881e08b5af0dcc284118f32c}";

  obtainAemetData () {
    return this.http.get( this.url )
            .subscribe( res => {
              console.log(res);
            } )
  }
}
