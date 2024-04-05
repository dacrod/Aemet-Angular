import { Component } from '@angular/core';
import { AemetService } from './aemet/services/aemet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor ( public aemetService: AemetService ) { }

  callApi () {
    this.aemetService.obtainAemetData();
  }

}
