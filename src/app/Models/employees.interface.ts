import { Rols } from "@Models/rols.interface";

export interface Employees {
  Id: number;
  Name: string;
  Email: string;
  Jwt: string;
  Rols: Rols[];
}
