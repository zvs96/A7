import { Injectable } from '@angular/core';
import * as Actions from './store/actions/methods.actions';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class ShopService {
    public _methods:Observable<any>;
    constructor(
        private _store: Store<any>
    ) {
        this._methods = this._store.pipe(select('_methods'))
     }
     __updateRaiting(rait:any){
         return new Observable(observer=>{
             console.log(rait, "raiting")
             observer.next(rait)
        })
     }
}