import { Injectable } from "@angular/core"
import { UserServices } from "../services/users.service";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate  {

  constructor( private userService: UserServices , private router: Router ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      this.userService.checkUserAuthenticate()
      if(!this.userService.isLogin) {
        alert("u shoud login first !")
        this.router.navigateByUrl('login')
        return false
      }
      return true

  }
}
