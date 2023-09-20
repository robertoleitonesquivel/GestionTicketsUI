import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdatePasswordComponent } from '@Components/update-password/update-password.component';
import { MaterialModule } from '@app/Common/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdatePasswordRoutingModule } from '@Components/update-password/update-password-routing.module';



@NgModule({
  declarations: [
    UpdatePasswordComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    UpdatePasswordRoutingModule
  ]
})
export class UpdatePasswordModule { }
