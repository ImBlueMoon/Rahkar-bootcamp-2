import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable , inject } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class UserServices {

  // constructor(private http: HttpClient) {}
  http = inject(HttpClient)

  private readonly _authStorageToken: string = "authToken";
  isLogin: boolean = false;


  signUp(name : string , password : string) : Observable <any> {
    var data = {
      name : name ,
      password : password
    }
    return this.http.post('http://localhost:5000/api/user/signup',data)
  }


  login(name : string , password : string) : Observable <any> {
    var data = {
      name : name ,
      password : password
    }
    return this.http.post('http://localhost:5000/api/user/login',data)
  }

  setTokenToLocalStorage(token : string) {
    localStorage.setItem(this._authStorageToken, token);
    this.isLogin = true;
  }

}
