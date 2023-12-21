import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ageValidators } from '../../custom-validators/custom-validators';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signUpForm! : FormGroup;
  isSignUpFormSubmitted = false;

  constructor(
    private fb:FormBuilder
  ) {
    this.initiliazeSignUpForm();
  }
  get email (){
    return this.signUpForm.get('email');
  }
  get password (){
    return this.signUpForm.get('password');
  }
  get name (){
    return this.signUpForm.get('name');
  }
  get gender (){
    return this.signUpForm.get('gender');
  }
  get age (){
    return this.signUpForm.get('age');
  }
  initiliazeSignUpForm(){
    this.signUpForm = this.fb.group({
      email : ['',[Validators.required,Validators.email]],
      password : ['',[Validators.required,Validators.minLength(6)]],
      name : ['',[Validators.required]],
      gender : ['',[Validators.required]],
      about : ['',[Validators.required]],
      age : ['',[Validators.required, ageValidators(18, 60)]],
    });
  }
  signUpFormSubmitHandler() {
    this.isSignUpFormSubmitted = true;
    console.log('signUpFormSubmitHandler',this.signUpForm.dirty);

    if (this.signUpForm.valid) {

    }
    // event.preventDefault();
    console.log(this.signUpForm);
  }
}
