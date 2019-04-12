import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of, Subscriber, pipe } from 'rxjs';
import { catchError, map, mergeMap, share, tap, switchMap, filter } from 'rxjs/operators';
import { All, MethodsActionTypes } from '../actions/methods.actions'
import { ShopService } from 'src/app/shopService';

@Injectable()
export class MethodsEffects {
  @Effect()
  __productApreciated$: Observable<any> = this.actions$.pipe(
    ofType<All>(MethodsActionTypes.inputValue),
    mergeMap(action => this._shop.__updateRaiting(action['payload']) /* succesFull any functions whichs finishet ok */),
    map(data => ({ type: 'value successFull', payload:data}))
    )
    constructor(private actions$: Actions, public _shop:ShopService) {}
  }
