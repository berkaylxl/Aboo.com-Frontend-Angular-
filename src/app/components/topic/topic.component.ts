import { TopicService } from './../../services/topic.service';
import { Topic } from './../../models/topic';
import { Component, OnInit } from '@angular/core';
import { TopicResponseModel } from 'src/app/models/topicResponseModel';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],
})
export class TopicComponent implements OnInit {
  topics: Topic[] = [];
  constructor(private topicService: TopicService) {}

  ngOnInit(): void {
    this.getTopics();
  }

  getTopics() {
    this.topicService.getTopics().subscribe(response=>{
      this.topics=response.data
      })
  }
}
