import { Injectable, inject } from "@angular/core";
import { CanActivate } from "@angular/router";

import { UserServices } from "../../SignUp-Login/service";

@Injectable ({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  service = inject(UserServices)

  canActivate() : boolean {
    return this.service.isLogin
  }
}
