import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolsComponent } from '@Components/rols/rols.component';


const routes: Routes = [
  {
    path: '',
    component: RolsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolsRoutingModule {

}
