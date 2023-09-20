import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalRoutingModule } from '@Components/principal/principal-routing.module';
import { MaterialModule } from '@Common/material/material.module';
import { PrincipalComponent } from './principal.component';
import { MenuComponent } from '@Components/menu/menu.component';



@NgModule({
  declarations: [
    PrincipalComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    MaterialModule
  ]
})
export class PrincipalModule { }
