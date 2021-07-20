import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { ObjResponseModel } from '../models/objResponseModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'https://localhost:44314/api/';

  constructor(private httpClient:HttpClient) { }


getUserById(id:number):Observable<ObjResponseModel<User>>
{
  return this.httpClient.get<ObjResponseModel<User>>(this.apiUrl+"users/getbyid?id="+id)
}

}
