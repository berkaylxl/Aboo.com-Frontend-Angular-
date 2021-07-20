import { TopicService } from './../../services/topic.service';

import { Component, OnInit } from '@angular/core';
import { Topic } from 'src/app/models/topic';
@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],
})
export class TopicComponent implements OnInit {
  topics:Topic[]
  currentTopic:Topic
  constructor(private topicService: TopicService) {}

  ngOnInit(): void {
    this.getTopics();
    
  }
  getTopics() {
    this.topicService.getTopics().subscribe(response=>{
      this.topics=response.data
      
      })
  }
  setCurrentTopic(topic:Topic)
  {
      this.currentTopic=topic
    
  }

}
