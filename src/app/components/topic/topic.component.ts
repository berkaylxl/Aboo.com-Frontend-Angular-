import { Topic } from './../../models/topic';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  topic:Topic[]=[]
  
  constructor() { }

  ngOnInit(): void {
  }

}
