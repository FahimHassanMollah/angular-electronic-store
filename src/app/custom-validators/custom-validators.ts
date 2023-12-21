import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function ageValidators(min: number, max: number) :  ValidatorFn {
  return (control : AbstractControl) : ValidationErrors | null => {
    if (control.value && (isNaN(control.value) || control.value < min || control.value > max)) {
      return {
        ageRange: true
      };
    }
    return null;
  };
}

