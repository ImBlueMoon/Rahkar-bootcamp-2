import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable , inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IListRequest } from './typing/list.Request';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  // constructor(private http: HttpClient) {}
  http = inject(HttpClient)


  addList(list : IListRequest): Observable <any> {
    return this.http.post('http://localhost:4000/api/list/add', list , {headers:new HttpHeaders({"content-type" : "application/json"})})
  }

  getListItems(): Observable <any> {
    return this.http.get('http://localhost:4000/api/list/get')
  }

  getOneItem(id : number): Observable <any> {
    return this.http.get(`http://localhost:4000/api/list/get/${id}`)
  }

  changeListStatus(id : number): Observable <any> {
    return this.http.get(`http://localhost:4000/api/list/status/${id}`)
  }

  deleteList(id : number): Observable <any> {
    return this.http.delete(`http://localhost:4000/api/list/delete/${id}`)
  }

  editeListTitle(data : IListRequest , id : number): Observable <any> {
    return this.http.put(`http://localhost:4000/api/list/edit/${id}` ,data)
  }

}
