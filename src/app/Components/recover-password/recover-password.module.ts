import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecoverPasswordComponent } from '@Components/recover-password/recover-password.component';
import { MaterialModule } from '@app/Common/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RecoverPasswordRoutingModule } from '@Components/recover-password/recover-password-routing.module';



@NgModule({
  declarations: [
    RecoverPasswordComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RecoverPasswordRoutingModule
  ]
})
export class RecoverPasswordModule { }
