import { Injectable } from "@angular/core";

@Injectable ({
  providedIn: 'root'
})

export class AuthService {
  users: any[] = [
    {
      name :'mohammad',
      username: 'mohammad',
      passowrd: '123'
    },
    {
      name :'samaneh',
      username: 'samaneh',
      passowrd: '456'
    }
  ];

  login(username: string, passowrd: string):boolean {
    let user = this.users.filter(user =>user.username === username && user.passowrd === passowrd)
    if (user) {
      console.log(user);
    return true;
    }else {
      console.log(user);
      return false
    }
  }
}
