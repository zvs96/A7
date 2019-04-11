import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm()
  }

  initForm(){
    this.myForm = this.fb.group({
      name: ["",[
        Validators.required,
        Validators.pattern(/[a-zA-Z ]/)
      ]],
      email: ["",[
        Validators.required,
        Validators.email
      ]],
    })
  }

  isControlInvalid(controlName:string):boolean{
    const control = this.myForm.controls[controlName]
    const result = control.invalid && control.touched
    return result
  }

  onSubmit(){
    const controls = this.myForm.controls

    if(this.myForm.invalid){
      Object.keys(controls).forEach(controlName => {
          return controls[controlName].markAsTouched()
        });
      return;
    }
    console.log(this.myForm.value)
  }

}
