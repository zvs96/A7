import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-event-emitter-child',
  templateUrl: './event-emitter-child.component.html',
  styleUrls: ['./event-emitter-child.component.less']
})
export class EventEmitterChildComponent implements OnInit {

 /*  @Output() onSubmit = new EventEmitter<boolean>();
  change(increased:any){
    this.onSubmit.emit(increased)
  } */


  @Input() userName:string;
  @Output() userNameChange = new EventEmitter<string>()
  
  onNameChange(model:string){
    this.userName = model
    this.userNameChange.emit(model)
  }

  constructor() { }

  ngOnInit() {
  }

}
