import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, FormControl, ValidationErrors } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { UserValidateService } from '../user-validate.service';
import { bind } from '@angular/core/src/render3';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.less']
})
export class RegComponent implements OnInit, OnDestroy{

  userForm: FormGroup;
  userTypes: string[];
  arr = {
    a:'assad',
    b:'asdasasdsadas'
  }

  constructor(private fb: FormBuilder, private userValidate: UserValidateService) { }

  ngOnInit() {
    this.userTypes = ['Admin',"Guest"]
    this.initForm()
    this.subscribeUserTypes()
  }

  ngOnDestroy(){
    this.userToTypeSubscription.unsubscribe()
  }

  private initForm():void{
    this.userForm = this.fb.group({
      type: [null,[
        Validators.required,
      ]],
      name: [null,[
        Validators.required,
        Validators.pattern(/[A-z0-9]*/),
        Validators.minLength(3)
      ],[
        this.nameAsyncValidate.bind(this)
      ]],
      email: [null,[
        Validators.required
      ]],
      password: [null,[
        Validators.required,
        this.passwordValidator
      ]],
    })
  }

  private userToTypeSubscription: Subscription;

  private subscribeUserTypes ():void {
    this.userToTypeSubscription = this.userForm.get('type')
      .valueChanges
      .subscribe(value=>this.toggleEmailValidate(value))
  }

  private toggleEmailValidate(userType):void {
    const email = this.userForm.get('email')

    const emailValidate:ValidatorFn[] = [
      Validators.required,
      Validators.email
    ]

    if(userType !== this.userTypes[0]){
      email.setValidators(emailValidate)
    }
    else{
      email.clearValidators()
    }

    email.updateValueAndValidity()
  }

  private passwordValidator(control: FormControl){
    const value = control.value;
    const hasNum = /[0-9]/.test(value)
    const hasCapitalLetter = /[A-Z]/.test(value)
    const hasLowerCaseLetter = /[a-z]/.test(value)
    const isLengthValid = value? value.length > 7 : false;

    const passValid = hasNum && hasCapitalLetter && hasLowerCaseLetter && isLengthValid

    if(!passValid){
      return {invalidPassword: "Warning Password !"}
    }
    return null;
  }

  private nameAsyncValidate(control:FormControl): Observable<ValidationErrors>{
    return this.userValidate.validateName(control.value)
  }

  private isControlInvalid(controlName:string):boolean{
    const control = this.userForm.controls[controlName]
    const result = control.invalid && control.touched
    return result
  }

  onSubmit(){
    const controls = this.userForm.controls

    if(this.userForm.invalid){
      Object.keys(controls).forEach(controlName => {
          return controls[controlName].markAsTouched()
        });
      return;
    }
    console.log(this.userForm.value)
  }

}
