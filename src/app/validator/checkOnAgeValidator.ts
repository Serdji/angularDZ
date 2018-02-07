import { FormControl } from '@angular/forms';

export function checkOnAgeValidator(formControl: FormControl) {
  const userData = formControl.value.split('-')[0];
  const dateYear = new Date().getFullYear();
  const age = dateYear - userData;
  if (!userData) {
    return { checkOnAgeValidator: {message: 'Вы не выбрали дату'} };
  } else if (age < 18) {
    return { checkOnAgeValidator: {message: 'Вы слишком молоды'} };
  } else {
    return null;
  }
}
