import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

import { Observable } from 'rxjs';

import { Topic } from '../models/topic';
import { ListResponseModel } from './../models/listResponseModel';
import { ObjResponseModel } from '../models/objResponseModel';
@Injectable({
  providedIn: 'root'
})
export class TopicService {
  apiUrl = 'https://localhost:44314/api/';
  
  constructor(private httpClient:HttpClient) { }


  getTopics():Observable<ListResponseModel<Topic>>{
    return this.httpClient.get<ListResponseModel<Topic>>(this.apiUrl+"topics/getall")
 }


 getTopicsById(id:number):Observable<ObjResponseModel<Topic>>{
  return this.httpClient.get<ObjResponseModel<Topic>>(this.apiUrl+"topics/get?id="+id)

 }

}
