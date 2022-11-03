import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

interface ILetContext<T> {
	$implicit: T;
	appLet: T;
}

// <ng-template let-products [appLet]="getProducts()">...</ng-template>

@Directive({
	selector: '[appLet]',
})
export class LetDirective<T> {
	@Input() set appLet(value: T) {
		this.viewContainer.clear();
		this.viewContainer.createEmbeddedView(this.template, {
			$implicit: value,
			appLet: value,
		});
	}

	constructor(
		private readonly viewContainer: ViewContainerRef,
		private readonly template: TemplateRef<ILetContext<T>>,
	) {}
}
