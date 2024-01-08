import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddtomywalletComponent } from './addtomywallet/addtomywallet.component';
import { AuthGuard } from './auth/AuthGuard';
import { TransActionsComponent } from './trans-actions/trans-actions.component';

export const routes: Routes = [
  {
    path: '' ,
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home' ,
    component: HomeComponent
  },
  {
    path: 'login' ,
    component: LoginComponent
  },
  {
    path: 'register' ,
    component: RegisterComponent
  },
  {
    path: 'mywallet' ,
    component: AddtomywalletComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'transaction' ,
    component: TransActionsComponent,
    canActivate: [AuthGuard]
  },
];
