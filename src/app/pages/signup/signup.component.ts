import { Component, inject } from '@angular/core';
import { User } from '../../models/user.model';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ageValidators } from '../../custom-validators/custom-validators';
import { UserService } from '../../services/user/user.service';
import { ToastrService } from 'ngx-toastr';
import { ErrorHandlerService } from '../../services/errorHandler/error-handler.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signUpForm!: FormGroup;
  isSignUpFormSubmitted = false;

  private fb: FormBuilder = inject(FormBuilder);
  private toastr: ToastrService = inject(ToastrService);
  private userService: UserService = inject(UserService);
  private errorHandlerService: ErrorHandlerService = inject(ErrorHandlerService);
  constructor() {
    this.initiliazeSignUpForm();
  }

  get email() {
    return this.signUpForm.get('email');
  }
  get password() {
    return this.signUpForm.get('password');
  }
  get name() {
    return this.signUpForm.get('name');
  }
  get gender() {
    return this.signUpForm.get('gender');
  }
  get about() {
    return this.signUpForm.get('about');
  }

  initiliazeSignUpForm() {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      name: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      about: ['',[Validators.required]],
    });
  }
  signUpFormSubmitHandler() {
    this.isSignUpFormSubmitted = true;
    if (!this.signUpForm.valid) {
      this.userService.signUpUser(this.signUpForm.value).subscribe({
        next: (data) => {
          console.log('data', data);
          this.signUpForm.reset();
          this.toastr.success("Sign up successfull");
        },
        error: (error) => {
          this.errorHandlerService.setFormValidationErrorMessages(this.signUpForm,error?.error);
          this.toastr.error("something went wrong");
        }
      });
    }
  }
}
