import {
	AfterContentInit,
	AfterViewInit,
	Component,
	ContentChild,
	ContentChildren,
	ElementRef,
	Input,
	OnChanges,
	OnInit,
	QueryList,
	SimpleChanges,
	TemplateRef,
	ViewChild,
	ViewChildren,
	ViewContainerRef,
} from '@angular/core';
import { MatList, MatListItem } from '@angular/material/list';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.less'],
})
export class SidenavComponent implements OnInit, AfterViewInit, AfterContentInit {
	// @Input() set navigationTemplate(template: TemplateRef<unknown> | undefined) {
	// 	// this.insertNavigationTemplate(template);
	// 	this.viewport.clear();

	// 	if (template) {
	// 		this.viewport.createEmbeddedView(template);
	// 	}
	// };

	@ViewChild(MatDrawer, { static: true })
	private matDrawerInstance!: MatDrawer;
	@ViewChild('viewport', { static: true, read: ViewContainerRef })
	private viewport!: ViewContainerRef;

	// @ContentChild('input', {static: true})
	// private readonly input!: ElementRef<HTMLInputElement>;
	@ContentChild('navigation', { static: true })
	private readonly navigationContentTemplate!: TemplateRef<unknown>;

	@ViewChildren('p')
	private readonly p!: QueryList<HTMLElement>;

	@ContentChildren(MatListItem, { read: ElementRef, descendants: false })
	private readonly matListsElementRef!: QueryList<HTMLElement>;

	// ngOnChanges({navigationTemplate}: SimpleChanges) {
	// 	if (navigationTemplate) {
	// 		this.insertNavigationTemplate(this.navigationTemplate)
	// 	}
	// }

	// private insertNavigationTemplate(template: TemplateRef<unknown> | undefined) {
	// 	this.viewport.clear();

	// 	if (template) {
	// 		this.viewport.createEmbeddedView(template);
	// 	}
	// }

	ngOnInit() {
		this.viewport.createEmbeddedView(this.navigationContentTemplate);
		// console.log(this.input);
		// this.input.nativeElement.value = '123';
		// 	setTimeout(() => {
		// 		if (this.navigationTemplate) {
		// 			this.viewport.createEmbeddedView(this.navigationTemplate);
		// 			this.viewport.createEmbeddedView(this.navigationTemplate);
		// 			this.viewport.createEmbeddedView(this.navigationTemplate);
		// 		}
		// 	}, 4000);
	}

	ngAfterContentInit() {
		console.log(this.matListsElementRef);
		console.log(this.navigationContentTemplate);
	}

	ngAfterViewInit() {
		console.log(this.p);
	}

	togleDrawer() {
		this.matDrawerInstance.toggle();
	}
}
