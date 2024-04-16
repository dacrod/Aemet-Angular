import { Component, OnInit } from '@angular/core';
import { AemetService } from './aemet/services/aemet.service';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { RedosService } from './red-os/services/red-os.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  constructor (private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true; 
  }

}
