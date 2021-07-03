import { ValidatorFn, AbstractControl } from '@angular/forms';

export function ForbiddenNameValidator(forbiddenName: RegExp): ValidatorFn {
  
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = forbiddenName.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}


// let sum = (x: number, y: number): number => {
//   return x + y;
// }