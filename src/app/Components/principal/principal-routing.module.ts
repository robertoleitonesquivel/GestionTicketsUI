import { UpdatePasswordModule } from '@Components/update-password/update-password.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal.component';


const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent,
    children: [
      {
        path: 'employees',
        loadChildren: () => import('../employees/employees.module').then(m => m.EmployeesModule)
      },
      {
        path: 'rols',
        loadChildren: () => import('../rols/rols.module').then(m => m.RolsModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then(m => m.SettingsModule)
      },
      {
        path: 'shield',
        loadChildren: () => import('../tickets/tickets.module').then(m => m.TicketsModule)
      },
      {
        path: 'update-password',
        loadChildren: () => import('../update-password/update-password.module').then(m => m.UpdatePasswordModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule {

}
