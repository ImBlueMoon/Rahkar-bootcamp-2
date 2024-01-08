import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable , inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class UserServices {

  http = inject(HttpClient)
  router = inject(Router)
  private readonly _authStorageToken: string = "authToken";
  isLogin: boolean = false;
  token !: any

  signUp(mobile : string , password : string) : Observable <any> {
    var data = {
      mobile : mobile ,
      password : password
    }
    return this.http.post('http://localhost:5000/api/user/signup',data)
  }


  login(mobile : string , password : string) : Observable <any> {
    var data = {
      mobile : mobile ,
      password : password
    }
    return this.http.post('http://localhost:5000/api/user/login',data)
  }

  setTokenToLocalStorage(token : any) {
    localStorage.setItem(this._authStorageToken, token);
    this.isLogin = true;
  }

  getTokenFromLocalStorage() : string {
    // return localStorage.getItem(this._authStorageToken) as string
    this.token = localStorage.getItem(this._authStorageToken)
    return this.token
  }

  removeTokenFromLocalStorage() {
    localStorage.removeItem(this._authStorageToken);
  }

  checkUserAuthenticate() {
    // if (this.getTokenFromLocalStorage())
    if(!this.isLogin)
    console.log("-checkUserAuthenticate- The User is not Logged in !!!");
  }

  logout() {
    this.removeTokenFromLocalStorage() , this.isLogin = false;
    this.router.navigateByUrl("home");
  }

  addMoneyToWallet(token : string , amountOfMoney : number): Observable <any> {
    var data = {
      token : token ,
      amountOfMoney : amountOfMoney
    }
    return this.http.post('http://localhost:5000/api/user/addtomywallet',data)
  }

  buyProduct(token : string , title : string , amount : number): Observable <any> {
    var data = {
      token : token ,
      title : title ,
      amountOfMoney : amount
    }
    return this.http.post('http://localhost:5000/api/user/buyproduct',data)
  }
}
