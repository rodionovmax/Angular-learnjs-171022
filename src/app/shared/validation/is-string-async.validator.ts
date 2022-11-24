import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { map, Observable, tap, timer } from 'rxjs';
import { isStringValidator } from './is-string.validator';

export const isStringAsyncValidator: AsyncValidatorFn = (
	control: AbstractControl,
): Observable<ValidationErrors | null> => {
	console.log('isStringAsyncValidator');

	return timer(3000).pipe(
		map(() => isStringValidator(control)),
		tap(error => {
			console.log('isStringAsyncValidator', error);
		}),
	);
};
