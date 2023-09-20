import { NgModule } from "@angular/core";
import { TicketsComponent } from "./tickets.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [{
  path: '',
  component: TicketsComponent
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }
