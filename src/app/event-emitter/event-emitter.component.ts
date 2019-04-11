import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-event-emitter',
  templateUrl: './event-emitter.component.html',
  styleUrls: ['./event-emitter.component.less']
})
export class EventEmitterComponent implements OnInit {

  // clicks:number = 0;

  // onChanged(increased:any){
  //   increased=true? this.clicks++:this.clicks--
  // }

  name:string = "Zaven"

  constructor() { }

  ngOnInit() {
  }

}
