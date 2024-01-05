import { Routes } from "@angular/router";
import { LoginComponent } from "../login/login.component";
import { registerLocaleData } from "@angular/common";
import { RegisterComponent } from "../register/register.component";

export const TaskRoutes: Routes=[
  {
    path: "",
    pathMatch: "full",
    redirectTo: "register"
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"login",
    component:LoginComponent
  }

]
