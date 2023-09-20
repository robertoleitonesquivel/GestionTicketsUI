import { NgModule } from "@angular/core";
import { TicketsComponent } from "./tickets.component";
import { CommonModule } from "@angular/common";
import { TicketsRoutingModule } from "@Components/tickets/tickets-routing.module";


@NgModule({
  declarations: [
    TicketsComponent
  ],
  imports: [
    CommonModule,
    TicketsRoutingModule
  ]
})
export class TicketsModule { }
