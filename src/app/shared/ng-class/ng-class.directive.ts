import { Directive, ElementRef, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Directive({
	selector: '[appNgClass]',
})
export class NgClassDirective implements OnChanges {
	@Input() appNgClass: Record<string, any> = {};

	constructor(private readonly elementRef: ElementRef<HTMLElement>) {}

	ngOnChanges({ appNgClass }: SimpleChanges) {
		if (appNgClass) {
			this.applyClassesToElement(appNgClass);
		}
	}

	private applyClassesToElement({ previousValue }: SimpleChange) {
		if (!previousValue) {
			Object.entries(this.appNgClass)
				.filter(([_className, value]) => Boolean(value))
				.forEach(([className]) => {
					this.elementRef.nativeElement.classList.add(className);
				});

			return;
		}

		Object.entries(this.appNgClass)
			.filter(([className, value]) => previousValue[className] !== value)
			.forEach(([className, value]) => {
				if (value) {
					this.elementRef.nativeElement.classList.add(className);

					return;
				}

				this.elementRef.nativeElement.classList.remove(className);
			});
	}
}
