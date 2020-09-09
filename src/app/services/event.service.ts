import { Injectable } from '@angular/core';
import {Event} from 'src/app/Model/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  
  events: Event[] = [
        { id: 1, name: 'Angular', description: 'Angular Event', speaker: 'Himanshu' },
        { id: 2, name: 'React', description: 'React Event', speaker: 'Saurabh' },
        { id: 3, name: 'Java', description: 'Java Event', speaker: 'Meenal' }
    ];
  eventService: any;
    
getEvents() {
        return this.events;
    }
    addEvent(eventName: string, desc: string, speaker: string) {
      this.eventService.addEvent(eventName, desc, speaker);
    }
  constructor() { }
}
