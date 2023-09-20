import { KeyStorage } from '@Models/enums';
import { Menus } from '@Models/menus.interface';
import { CommonService } from '@Services/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  /*LISTAS */
  menusList: Menus[] = [];
  sumenus: Menus[] = [];

  /*Variables */

  constructor(private commonSvc: CommonService) {

  }

  ngOnInit(): void {
    this.onLoad();
  }

  private onLoad(): void {
    this.menusList = this.commonSvc.getStorage<Menus[]>(KeyStorage.MENUS) ?? [];
    this.menusList.forEach(element => {
      element.subMenu = this.menusList.filter(x => x.IdMenuPadre === element.Id) ?? [];
    });
    this.menusList = this.menusList.filter(x => x.IdMenuPadre === 0);
  }

  public getSubMenu(_id: number): Menus[] {
    return this.menusList.filter(x => x.IdMenuPadre === _id) ?? [];
  }

}
