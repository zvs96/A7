import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponentCanDeactivate } from './exit.about.guard';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements ComponentCanDeactivate {

  saved: boolean = false;
  save(){
    this.saved = true
  }
  
  canDeactivate():boolean | Observable<boolean> {
    if(!this.saved){
      return confirm("You have unsaved data")
    }
    else{
      return true
    }
  }

  constructor() { }


}
