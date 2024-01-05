import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable , inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AddMoneyToWallet {

  // constructor(private http: HttpClient) {}
  http = inject(HttpClient)
  router = inject(Router)
  private readonly _authStorageToken: string = "authToken";
  isLogin: boolean = false;

  getTokenFromLocalStorage() : string {
    let token = localStorage.getItem(this._authStorageToken) as string
    return token
  }

  AddMoney(id : number , bujet : number) : Observable <any> {
    var data = {
      user_id  : id ,
      amount_wallet : bujet
    }
    return this.http.post('http://localhost:5000/api/user/addtomywallet',data)
  }


}
