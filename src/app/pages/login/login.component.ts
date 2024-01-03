import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/user/user.service';
import { ErrorHandlerService } from '../../services/errorHandler/error-handler.service';
import { LoginService } from '../../services/login/login.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers/index.reducer';
import * as LoginActions from '../../store/actions/login.action';
import { LoginResponse } from '../../models/login.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup;
  isLoginFormSubmitted = false;

  private store : Store<AppState> = inject(Store);
  private fb: FormBuilder = inject(FormBuilder);
  private toastr: ToastrService = inject(ToastrService);
  private loginService: LoginService = inject(LoginService);
  private errorHandlerService: ErrorHandlerService = inject(ErrorHandlerService);

  login$ : Observable<LoginResponse> = this.store.select('login');

  constructor() {
    this.initiliazeSignUpForm();
    this.login$.subscribe((res) => console.log('res : ', res))
    
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  initiliazeSignUpForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  loginFormSubmitHandler() : void {
    this.isLoginFormSubmitted = true;
    this.loginService.loginUser(this.loginForm.value).subscribe({
      next: (res) => {
        console.log('res', res);
        this.store.dispatch(LoginActions.loginSuccess(res));
        this.loginForm.reset();
        this.isLoginFormSubmitted = false;
        this.toastr.success("Logged In successfully");
      },
      error: (error) => {
        this.errorHandlerService.setFormValidationErrorMessages(this.loginForm, error?.error);
        this.toastr.error("Something went wrong");
      }
    });
  }
}
