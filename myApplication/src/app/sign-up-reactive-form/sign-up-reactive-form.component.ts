import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-reactive-form',
  templateUrl: './sign-up-reactive-form.component.html',
  styleUrls: ['./sign-up-reactive-form.component.css']
})
export class SignUpReactiveFormComponent {

  signUpForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formLoad()
  }


  formLoad() {

     this.signUpForm = this.formBuilder.group({
      name : ['',[Validators.required]],
      mobile : [],
      pancard:[''],
      email:[''],
      pass:[''],
      confirmPass:['']
     })
  }
  submit(){
    console.log(this.signUpForm.value);
    
  }
}
