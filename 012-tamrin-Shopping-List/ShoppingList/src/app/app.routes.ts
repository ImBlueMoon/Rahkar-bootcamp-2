import { Routes } from '@angular/router';
import { ListFormComponent } from './Lists/list-form/list-form.component';

export const routes: Routes = [
  // {
  //   path: "form",
  //   loadChildren: ()=>import("./Lists/list.routes").then((m)=>m.ListRoutes)
  // }
  {
    path: "",
    component: ListFormComponent
  }
];
