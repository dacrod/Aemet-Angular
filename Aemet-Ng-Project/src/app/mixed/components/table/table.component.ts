import { Component, OnInit } from '@angular/core';
import { AemetService } from '../../../aemet/services/aemet.service';

@Component({
  selector: 'mixed-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  arrayAemet: [] = [];

  constructor ( private aemetService: AemetService ) {}

  ngOnInit(): void {

  }

}
