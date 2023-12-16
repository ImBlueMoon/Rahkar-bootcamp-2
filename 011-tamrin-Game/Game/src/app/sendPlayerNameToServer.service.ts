import { Injectable, inject } from '@angular/core';
import { HttpClient , HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class SendPlayerNameToServer {

  // constructor( private http:HttpClient) {}

  // serverAPI = 'http://localhost3000'

  // sendName (name1: string , name2: string) {
  //   var data = {
  //     name1:name1 ,
  //     name2:name2
  //   }
  //   return this.http.post(this.serverAPI, data)
  // }

  http = inject(HttpClient)

  sendName(name1 : string , name2 : string ) {
    var playerNames = {
      name1 : name1 ,
      name2 : name2
    }
    return this.http.post('http://localhost:4000/sendName' , playerNames)
  }

  getMyServerData (): Observable <any> {
    return this.http.get('http://localhost:4000')
  }

  getRandomNumber(): Observable <any> {
    return this.http.get('http://localhost:4000/randomNumber')
  }
}
