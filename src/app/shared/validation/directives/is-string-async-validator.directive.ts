import { ChangeDetectorRef, Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable, tap } from 'rxjs';
import { isStringAsyncValidator } from '../is-string-async.validator';

@Directive({
	selector: '[appIsStringAsyncValidator]',
	providers: [
		{
			provide: NG_ASYNC_VALIDATORS,
			multi: true,
			useExisting: IsStringAsyncValidatorDirective,
		},
	],
})
export class IsStringAsyncValidatorDirective implements AsyncValidator {
	constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

	validate(
		control: AbstractControl<any, any>,
	): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
		console.log('isStringAsyncValidator');
		return (isStringAsyncValidator(control) as Observable<ValidationErrors | null>).pipe(
			tap(error => {
				console.log('isStringAsyncValidator', error);
				this.changeDetectorRef.markForCheck();
			}),
		);
	}
}
