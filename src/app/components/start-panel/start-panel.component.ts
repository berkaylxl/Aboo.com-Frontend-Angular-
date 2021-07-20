import { TopicService } from './../../services/topic.service';
import { Component, OnInit } from '@angular/core';
import { Topic } from 'src/app/models/topic';

@Component({
  selector: 'app-start-panel',
  templateUrl: './start-panel.component.html',
  styleUrls: ['./start-panel.component.css']
})
export class StartPanelComponent implements OnInit {
  topics:Topic[]=[]
  constructor(private topicService:TopicService) { }

  ngOnInit(): void {
    this.getTopics();
      
    }
      
    getTopics(){
      this.topicService.getTopics().subscribe((response)=>{
       this.topics=response.data
      })
    }
    
  }


