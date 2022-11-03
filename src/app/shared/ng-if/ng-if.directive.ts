import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
	selector: '[appNgIf]',
})
export class NgIfDirective {
	@Input() set appNgIf(visibilityFlag: any) {
		const isContainerHasView = this.viewContainer.length;

		if (visibilityFlag && !isContainerHasView) {
			this.viewContainer.createEmbeddedView(this.template, {
				$implicit: visibilityFlag,
				appNgIf: visibilityFlag,
			});

			return;
		}

		if (!visibilityFlag && isContainerHasView) {
			this.viewContainer.clear();
		}
	}

	constructor(
		private readonly viewContainer: ViewContainerRef,
		private readonly template: TemplateRef<{
			$implicit: any;
			appNgIf: any;
		}>,
	) {}
}
