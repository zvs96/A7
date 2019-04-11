import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ValidationErrors } from '@angular/forms';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserValidateService {

  private users: string[]

  constructor() { 
    this.users = ["Zaven","John","Ivan","Anna"]
  }

  validateName(userName: string): Observable<ValidationErrors> {
    return new Observable<ValidationErrors>(obs=>{
      const user = this.users.find(user=> user === userName)

      if(user){
        obs.next({
          nameError: "The name is busy, try another name"
        });
        obs.complete()
      }

      obs.next(null)
      obs.complete()
    }).pipe(
      delay(1000)
    )
  }
}
