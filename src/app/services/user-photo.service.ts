import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObjResponseModel } from '../models/objResponseModel';
import { UserPhoto } from '../models/userPhoto';

@Injectable({
  providedIn: 'root'
})
export class UserPhotoService {
  apiUrl = 'https://localhost:44314/api/';
  constructor(private httpClient:HttpClient) { }


  getPhotoByUserId(userId:number):Observable<ObjResponseModel<UserPhoto>>{
        return this.httpClient
        .get<ObjResponseModel<UserPhoto>>
        (this.apiUrl+"userPhotos/getbyid?userid="+userId)
  }
}
