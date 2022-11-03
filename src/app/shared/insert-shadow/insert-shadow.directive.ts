import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
	selector: '[appInsertShadow]',
})
export class InsertShadowDirective {
	@HostBinding('style.boxShadow')
	get boxShadow() {
		return this.isBoxShadowActive ? 'inset 0 0 10px #000' : '';
	}

	@HostListener('click', ['$event.clientY', '$event.clientX'])
	onClick(y: number, x: number) {
		console.log('click', y, x);
		this.isBoxShadowActive = !this.isBoxShadowActive;
	}

	private isBoxShadowActive = false;
}
