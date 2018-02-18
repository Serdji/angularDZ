import {FormControl} from '@angular/forms';

export function urlAvatarValidator(formControl: FormControl) {
  const re = /^(https?:\/\/)?([\w\.]+)\.([a-z]{2,6}\.?)(\/[\w\.]*)*\/?$/;
  if (re.test(formControl.value) || formControl.value.length === 0) {
    return null;
  }
  return { urlAvatarValidator: {message: 'Некорректный URL'} };
}
