import { Injectable } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, AbstractControl } from '@angular/forms';


@Injectable({ providedIn: 'root' })
export class FormService {

  constructor() { }

  getFormErrors(form: AbstractControl) {
    if (form instanceof UntypedFormControl) {
      return form.errors ?? null;
    }
    if (form instanceof UntypedFormGroup) {
      const groupErrors = form.errors;
      const formErrors = groupErrors ? { groupErrors } : {};
      Object.keys(form.controls).forEach(key => {
        const error = this.getFormErrors(form.get(key));
        if (error !== null) {
          //console.log("Key " + key + " " + error);
          formErrors[key] = error;
        }
      });

      return Object.keys(formErrors).length > 0 ? formErrors : null;
    }
  }

  formHasErrors(form: UntypedFormGroup): boolean {
    let formErrors: any = this.getFormErrors(form);

    let hasErrors: boolean = (formErrors && Object.keys(formErrors).length > 0);

    return hasErrors;
  }
}
