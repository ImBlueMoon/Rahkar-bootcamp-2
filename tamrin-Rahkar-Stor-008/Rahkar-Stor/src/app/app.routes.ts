import { Routes } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { HomeComponent } from './home/home.component';



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
        loadComponent: () => import ('./home/profile/profile.component').then(m => m.ProfileComponent)
      },
      {
        path: "product/:id",
        loadComponent: () => import ('./products-details/products-details.component').then(m => m.ProductsDetailsComponent)
      }
    ]
  }

];
