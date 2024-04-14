import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit{

  menuItems: MenuItem[] = [];

  activeItem: MenuItem | undefined;

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
        routerLink: 'config',
        items: [
          {
            label: 'Login'
          },
          {
            label: 'Register'
          }
        ]
      }
    ];
    this.activeItem = this.menuItems[0];
  };

  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
  }
}
