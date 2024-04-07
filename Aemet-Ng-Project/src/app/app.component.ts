import { Component } from '@angular/core';
import { AemetService } from './aemet/services/aemet.service';
import { MenuItem } from 'primeng/api';
import { RedOsService } from './red-os/services/red-os.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor (
    public aemetService: AemetService,
    public redOsService: RedOsService
  ) { }

  callApiAemet () {
    this.aemetService.obtainAemetData();
  }

  callApiRedOs () {
    this.redOsService.obtainRedOsData();
  }

}
