import { Routes } from '@angular/router';
import { SingUpComponent } from './SignUp-Login/sing-up.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AuthGuard } from './core/guard/auth.guard';

export const routes: Routes = [
  {
    path: "login",
    component:SingUpComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "cart",
    component: CartComponent ,
    canActivate: [AuthGuard]
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
];
