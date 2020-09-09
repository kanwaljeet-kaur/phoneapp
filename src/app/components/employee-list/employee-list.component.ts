import { Component, OnInit } from '@angular/core';

import {Event} from 'd:/angulardemos/lntproject/src/app/Model/event';
import {EventService} from 'd:/angulardemos/lntproject/src/app/services/event.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  events: Event[] = [];

  addEvent(eventName:string,desc:string,speaker:string) { 
    let newEvent= { id: this.events.length+1,
     name: eventName, description:desc, speaker: speaker };
     return this.events.push(newEvent);
  }
  
  constructor(private eventService: EventService) {
    
   }
  

  ngOnInit(): void {
    this.events=this.eventService.getEvents();
    
    }
  }


