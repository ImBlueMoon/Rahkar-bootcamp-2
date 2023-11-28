import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

export const routes: Routes = [{
  path: "home",
  component: HomeComponent,
  children: [
    {
    path: "users",
    component: UsersComponent
    },
    {
      path: "user-detail",
      component: UserDetailComponent
    },
    {
      path: "users",
      component: UsersComponent,
    },
    {
      path: "user/:id",
      component: UserDetailComponent,
    }
  ]
}];
