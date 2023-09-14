import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
	selector: '[appInsertShadow]',
})
export class InsertShadowDirective {
	@HostBinding('style.boxShadow')
	// get boxShadow() {
	// 	return this._boxShadow;
	// }
	get boxShadow() {
		return this.isBoxShadowActive ? 'inset 0 0 10px #000' : '';
	}

	@HostListener('click', ['$event.clientY', '$event.clientX'])
	onClick(y: number, x: number) {
		console.log('click', y, x);
		// this._boxShadow = this._boxShadow ? '' : 'inset 0 0 10px #000';
		this.isBoxShadowActive = !this.isBoxShadowActive;
	}

	// private _boxShadow = '';
	private isBoxShadowActive = false;

	constructor() {
	}

}
