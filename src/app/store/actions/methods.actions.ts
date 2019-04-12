import { Action } from '@ngrx/store';

export enum MethodsActionTypes {
  clickButton = '[Methods] click button',
  inputValue = "input value",
  alertMsg = 'alert MSG',
  valueSuccess = 'value successFull'
}

export class ClickButton implements Action {
  readonly type = MethodsActionTypes.clickButton;
  constructor(public payload:{}){}
}
export class AlertMsg implements Action {
  readonly type = MethodsActionTypes.alertMsg;
  constructor(){}
}
export class ValueSuccess implements Action {
  readonly type = MethodsActionTypes.valueSuccess;
  constructor(public payload:{}){}
}

export class InputValue implements Action {
  readonly type = MethodsActionTypes.inputValue;
  constructor(public payload:{}){}
}

export type All = ClickButton | InputValue | AlertMsg | ValueSuccess;
