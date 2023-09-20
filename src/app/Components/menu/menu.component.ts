import { Menus } from '@Models/menus.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  /*Inputs */
  @Input('menus') menus: Menus[] = [];
  @Input('menu') menu!: Menus;

  /*Variables */
  toggle = false;
}
