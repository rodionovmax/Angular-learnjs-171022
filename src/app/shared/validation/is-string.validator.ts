// isStringValidator implements ValidatorFn

import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const isStringValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
	return Number(control.value) ? { isStringValidator: 'input value is not string' } : null;
};
// export function isStringValidator(value: any) {
//     return Number(value) ? 'is not string' : null
// }
