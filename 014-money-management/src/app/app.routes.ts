import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HoemComponent } from './hoem/hoem.component';
import { AddToMyWalletComponent } from './add-to-my-wallet/add-to-my-wallet.component';

export const routes: Routes = [
  {
    path:"login",
    component:RegisterComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"home",
    component:HoemComponent
  },
  {
    path:"addToWallet",
    component:AddToMyWalletComponent
  },
];
