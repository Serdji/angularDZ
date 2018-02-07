import {FormControl} from '@angular/forms';

export function emailValidator(formControl: FormControl) {
  const re =  /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/;
  console.log(re.test(formControl.value));
  if (re.test(formControl.value)) {
    return null;
  }
  return { emailValidator: {message: 'Некорректный email'} };
}
