import {
	AfterContentInit,
	AfterViewInit,
	Component, ContentChild, ContentChildren,
	ElementRef,
	EventEmitter,
	Input, OnChanges,
	OnInit,
	Output, QueryList, SimpleChanges,
	TemplateRef,
	ViewChild, ViewChildren, ViewContainerRef,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { MatListItem } from '@angular/material/list';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.less'],
})
export class SidenavComponent implements OnInit, AfterViewInit, AfterContentInit {
	// @Input() isDrawerOpened = false;
	// @Output() isDrawerOpenedChange = new EventEmitter<boolean>();
	// @Input() navigationTemplate: TemplateRef<unknown> | undefined;
	/*@Input() set navigationTemplate(template: TemplateRef<unknown> | undefined) {
		// this.insertNavigationTemplate(template);
		this.viewport.clear();
		if (template) {
			this.viewport.createEmbeddedView(template);
		}
	}*/

	@ViewChild(MatDrawer, { static: true })
	private matDrawerInstance!: MatDrawer;
	@ViewChild('viewport', { static: true, read: ViewContainerRef })
	private viewport!: ViewContainerRef;
	/*@ContentChild('input', { static: true })
	private readonly input!: ElementRef<HTMLInputElement>;*/
	@ContentChild('navigation', { static: true })
	private readonly navigationContentTemplate!: TemplateRef<unknown>;

	@ViewChildren('p')
	private readonly p!: QueryList<HTMLElement>;

	@ContentChildren(MatListItem, { read: ElementRef, descendants: false })
	private readonly matListElementRef!: QueryList<HTMLElement>;

	// @ViewChild(MatDrawer, {
	//   read: MatDrawer,
	//   static: true,
	// })
	// private matDrawerTest!: MatDrawer;

	ngOnInit() {
		// console.log(this.input);
		// this.input.nativeElement.value = '123';
		this.viewport.createEmbeddedView(this.navigationContentTemplate);
		console.log(document)
		// this.matDrawerTest.toggle();
		// setTimeout(() => {
		// 	if (this.navigationTemplate) {
		// 		this.viewport.createEmbeddedView(this.navigationTemplate);
		// 	}
		// }, 4000);
	}

	ngAfterViewInit() {
		console.log(this.p);
	}

	ngAfterContentInit() {
		console.log(this.matListElementRef);
		console.log(this.navigationContentTemplate)
	}

	/*ngOnChanges({navigationTemplate}: SimpleChanges) {
		if (navigationTemplate) {
			this.insertNavigationTemplate(this.navigationTemplate);
		}
	}*/

	/*private insertNavigationTemplate(template: TemplateRef<unknown> | undefined) {
		this.viewport.clear();
		if (template) {
			this.viewport.createEmbeddedView(template);
		}
	}*/

	// ngAfterViewInit() {
	// setTimeout(() => {
	//   this.matDrawerTest.toggle();
	// })
	// }

	toggleDrawer() {
		this.matDrawerInstance.toggle();
		// console.log(this.matDrawerTest);
	}
}
