import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@Common/material/material.module';
import { RolsComponent } from '@Components/rols/rols.component';
import { RolsRoutingModule } from '@Components/rols/rols-routing.module';



@NgModule({
  declarations: [
    RolsComponent
  ],
  imports: [
    CommonModule,
    RolsRoutingModule,
    MaterialModule
  ]
})
export class RolsModule { }
