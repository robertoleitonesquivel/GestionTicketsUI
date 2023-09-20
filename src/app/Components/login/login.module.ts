import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MaterialModule } from 'src/app/Common/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { SelectRolComponent } from '@Components/select-rol/select-rol.component';



@NgModule({
  declarations: [
    LoginComponent,
    SelectRolComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    LoginRoutingModule
  ],
  providers: []
})
export class LoginModule { }
