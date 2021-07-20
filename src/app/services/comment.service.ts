import { ListResponseModel } from './../models/listResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  apiUrl = 'https://localhost:44314/api/';


  constructor(private httpClient:HttpClient) { }




getComment():Observable<ListResponseModel<Comment>>
{
   return this.httpClient.get<ListResponseModel<Comment>>(this.apiUrl+"comments/getall")
}

getCommentByTopic(topicId:number):Observable<ListResponseModel<Comment>>
{
   return this.httpClient.get<ListResponseModel<Comment>>(this.apiUrl+"comments/getByTopicId?id="+topicId)
}


}
