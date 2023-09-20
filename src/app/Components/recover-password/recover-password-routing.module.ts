import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifyTokenResolver } from '@app/Resolver/verify-token.resolver';
import { RecoverPasswordComponent } from '@Components/recover-password/recover-password.component';

const routes: Routes = [
  {
    path: '',
    component: RecoverPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecoverPasswordRoutingModule {

}
