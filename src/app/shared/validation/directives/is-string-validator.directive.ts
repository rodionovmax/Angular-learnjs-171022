import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { isStringValidator } from '../is-string.validator';

@Directive({
	selector: '[appIsStringValidator]',
	providers: [
		{
			provide: NG_VALIDATORS,
			multi: true,
			useExisting: IsStringValidatorDirective,
		},
	],
})
export class IsStringValidatorDirective implements Validator {
	constructor() {}

	validate(control: AbstractControl<any, any>): ValidationErrors | null {
		return isStringValidator(control);
	}
}
