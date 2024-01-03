import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor() { }

  setFormValidationErrorMessages(form: FormGroup, errors: { [key: string]: string }) {
    for (const error in errors) {
      const control = form.get(error);
      if (control) {
        control.setErrors({ [error]: errors[error] });
      }
    }
  }
}
