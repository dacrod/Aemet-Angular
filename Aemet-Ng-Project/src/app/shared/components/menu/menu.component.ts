import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit{

  menuItems: MenuItem[] = [];

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Home',
        icon: 'pi pi-desktop',
        routerLink: '/'
      },
      {
        label: 'Configuration',
        icon: 'pi pi-cog',
        routerLink: 'config'
      }
    ]
  };
}
