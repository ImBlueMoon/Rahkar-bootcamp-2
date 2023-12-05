import { Routes } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './home/profile/profile.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'products',
        loadComponent: () => import ('./home/products/products.component').then(m => m.ProductsComponent)
      },
      {
        path: 'profile',
        component: ProfileComponent
      }
    ]
  },
  {
    path: "product/:id",
    component: ProductsDetailsComponent,
  }

];
