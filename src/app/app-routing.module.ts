import { logout, verifyToken } from '@Utils/guards/utils-guards';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./Components/principal/principal.module').then(m => m.PrincipalModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Components/login/login.module').then(m => m.LoginModule),
    canActivate: [logout]
  },
  {
    path: 'recover-password',
    loadChildren: () => import('./Components/recover-password/recover-password.module').then(m => m.RecoverPasswordModule),
    canActivate: [verifyToken]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
