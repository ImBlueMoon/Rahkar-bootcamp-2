import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable ({
  providedIn: 'root'
})

export class AuthService {

  login$ = new Subject()

  users: any[] = [
    {
      id: 1,
      FirstName :'Mohammad',
      LastName: 'Ahmadi',
      username: 'mohammad',
      password: '123'
    },
    {
      id:2,
      FirstName :'Samanhe',
      LastName: 'Hasani',
      username: 'samaneh',
      password: '456'
    },
    {
      id: 3,
      FirstName :'Zahra',
      LastName: 'Amir Pour',
      username: 'amirpour',
      password: '789'
    }
  ];

  login(username: string, password: string):any {
    let user = this.users.filter(user =>user.username === username && user.password === password)
    if (user.length>0) {
      this.login$.next(true);
    }else {
      this.login$.next(false);
    }
  }
}
