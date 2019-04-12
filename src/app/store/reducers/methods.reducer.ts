// import { Action } from '@ngrx/store';
import * as  Actions from '../actions/methods.actions'
export type ActionT = Actions.All;

export const initialState = {
  buttonCount: null,
  inputValue: null
};
let alertMsg = () => {
  alert(11)
} 

export function methods(state = initialState, action: ActionT) {
  console.log(action['type'])
  switch (action.type) {
    case Actions.MethodsActionTypes.clickButton:
      return {...state, buttonCount:action.payload}
    case Actions.MethodsActionTypes.valueSuccess:
      console.log('success', action.payload)
        return {...state}
    // case Actions.MethodsActionTypes.inputValue:
    // console.log('inputVal', action.payload)
    //   return {...state, inputValue:action.payload}
    case Actions.MethodsActionTypes.alertMsg:
      alertMsg()
      return {...state}
    default:
      return state;
  }
}
