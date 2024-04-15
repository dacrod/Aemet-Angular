import { Component } from '@angular/core';
import { AemetService } from './aemet/services/aemet.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor (
    public aemetService: AemetService,
  ) { }

  callApiAemet () {
    this.aemetService.obtainAemetData();
  }

}
