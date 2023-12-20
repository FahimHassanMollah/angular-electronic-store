import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  public user: User;
  signUpForm! : FormGroup;


  constructor() {
    this.user = new User('','','','','');
    this.signUpForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(6)]),
      name : new FormControl('',[Validators.required,Validators.minLength(3)]),
      gender : new FormControl('',[Validators.required]),
      about : new FormControl('',[Validators.required]),
    });

  }
  signUpFormSubmitHandler() {
    if (this.signUpForm.valid) {

    }
    // event.preventDefault();
    console.log(this.signUpForm);
  }
}
