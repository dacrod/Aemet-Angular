import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class RedOsService {

  constructor (private http: HttpClient) { }

  public url: string = "https://apidatos.ree.es/es/datos/balance/balance-electrico?start_date=2019-01-01T00:00&end_date=2019-01-31T23:59&time_trunc=day";

  obtainRedOsData () {
    return this.http.get( this.url )
            .subscribe( res => {
              console.log(res);
            } )
  }

}
