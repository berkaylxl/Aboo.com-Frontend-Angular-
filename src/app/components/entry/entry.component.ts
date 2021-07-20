import { UserPhoto } from './../../models/userPhoto';
import { UserPhotoService } from './../../services/user-photo.service';
import { UserService } from './../../services/user.service';

import { TopicService } from './../../services/topic.service';
import { CommentService } from './../../services/comment.service';
import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/comment';
import { ActivatedRoute } from '@angular/router';
import { Topic } from 'src/app/models/topic';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  comments:Comment[];
  user:User;
  topic:Topic;
  userPhoto:UserPhoto;

   topicTitle:string
   topicUserId:number
   topicText:string
   topicDate:Date
   topicUserNick:string
   photoPath:string


    constructor(
    private commentService:CommentService,
    private topicService:TopicService,
    private activatedRoute:ActivatedRoute,
    private userService:UserService,
    private userPhotoService:UserPhotoService
    ) { }

  ngOnInit(): void {
     this.activatedRoute.params.subscribe(params=>{
       if(params["topicId"]){
         this.getTopicById(params["topicId"])
         this.getCommentByTopic(params["topicId"])
        
       }
     })
    
  }
  getTopicById(id:number){
    this.topicService.getTopicsById(id).subscribe((response)=>{
     this.topic=response.data
     this.topicTitle=this.topic.topicTitle
     this.topicText=this.topic.topicText
     this.topicDate=this.topic.creationDate
     this.topicUserId=this.topic.userId
     this.getUserById(this.topicUserId);
     this.getPhotoByUser(this.topic.userId)
    })
  }
  getCommentByTopic(topicId:number){
      this.commentService.getCommentByTopic(topicId).subscribe((response)=>{
      this.comments=response.data
     
    })
  }
  getUserById(id:number){
    this.userService.getUserById(id).subscribe((response)=>{
      this.user=response.data
      this.topicUserNick=this.user.nick
      
      
    })
  }
  getPhotoByUser(userId:number){
       this.userPhotoService.getPhotoByUserId(userId).subscribe((response)=>{
         this.userPhoto=response.data
         this.photoPath=this.userPhoto.imagePath
       })

  }

}
