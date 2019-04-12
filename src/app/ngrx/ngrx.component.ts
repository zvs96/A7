import { Component, OnInit } from '@angular/core';
import * as Actions from '../store/actions/methods.actions'
import { AppState } from '../store/app.state'
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.css']
})
export class NgrxComponent implements OnInit {

  inpVal="";
  constructor(
    private _store: Store<AppState>,
  ) { 
    let _unsub = this._store.pipe(select('_methods')).subscribe(res=>{
      if(res.buttonCount){
        console.log(res, 'store')
        _unsub.unsubscribe()
      }
      if(res.inputValue){
        console.log(res, 'store1')
        _unsub.unsubscribe()
      }
    })
  }

  ngOnInit() {
  }

  updateState(){
    // this._store.dispatch(new Actions.AlertMsg())
    this._store.dispatch(new Actions.InputValue(this.inpVal))
  }
}
