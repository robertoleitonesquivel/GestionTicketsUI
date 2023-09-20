import { AbstractControl, ValidatorFn } from "@angular/forms";

export default class Validation{

  static equalsPassword(controlName: string, controlNameCompare: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const password = controls.get(controlName)?.value || '';
      const confirmPasword = controls.get(controlNameCompare)?.value || '';

      if (password !== confirmPasword) {
        controls.get(controlNameCompare)?.setErrors({ equalsPassword: true });
        return { equalsPassword: true };
      } else {
        return null;
      }
    }
  }
}
