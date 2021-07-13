import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { TopicResponseModel } from '../models/topicResponseModel';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TopicService {
  apiUrl = 'https://localhost:44314/api/';
  
  constructor(private httpClient:HttpClient) { }


  getTopics():Observable<TopicResponseModel>{
    return this.httpClient.get<TopicResponseModel>(this.apiUrl+"topics/getall")
 }




}
