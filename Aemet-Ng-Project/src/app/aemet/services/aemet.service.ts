import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AemetService {

  constructor (private http: HttpClient) { }

  public url: string = "https://opendata.aemet.es/opendata/api/observacion/convencional/todas?api_key={eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkYW5pZWxjdWFyZW50YWxlc29AZ21haWwuY29tIiwianRpIjoiMDE2N2YzODctMGY3My00Y2ZhLWI4NWEtNjRjNTY3MmE1NjBjIiwiaXNzIjoiQUVNRVQiLCJpYXQiOjE3MDQ3OTgwMTcsInVzZXJJZCI6IjAxNjdmMzg3LTBmNzMtNGNmYS1iODVhLTY0YzU2NzJhNTYwYyIsInJvbGUiOiIifQ.7iXh8fQr2Oyc8RDW3kYeTPG7ecHHcVLOMZ-cmIW3jGw}";

  obtainAemetData () {
    return this.http.get( this.url )
            .subscribe( res => {
              console.log(res);
            } )
  }
}
