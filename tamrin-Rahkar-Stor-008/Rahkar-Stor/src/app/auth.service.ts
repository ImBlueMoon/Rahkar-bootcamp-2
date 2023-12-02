import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";

@Injectable ({
  providedIn: 'root'
})

export class AuthService {

  login$ = new Subject()

  constructor(private router: Router) {}
  users: any[] = [
    {
      id: 1,
      name :'mohammad',
      username: 'mohammad',
      passowrd: '123'
    },
    {
      id:2,
      name :'samaneh',
      username: 'samaneh',
      passowrd: '456'
    },
    {
      id: 3,
      name :'zahra',
      username: 'amirpour',
      passowrd: '789'
    }
  ];

  login(username: string, passowrd: string):any {
    // this.login$.next(true);
    let user = this.users.filter(user =>user.username === username && user.passowrd === passowrd)
    if (user.length>0) {
      this.login$.next(true);
      // this.router.navigate(['user',])
    }else {
      this.login$.next(false);
    }
  }
}
