import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ContentChild,
	OnInit,
	TemplateRef,
	ViewChild,
	ViewContainerRef,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent implements OnInit {
	@ViewChild(MatDrawer, { static: true })
	private matDrawerInstance!: MatDrawer;
	@ViewChild('viewport', { static: true, read: ViewContainerRef })
	private viewport!: ViewContainerRef;

	@ContentChild('navigation', { static: true })
	private readonly navigationContentTemplate!: TemplateRef<unknown>;

	constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

	ngOnInit() {
		this.viewport.createEmbeddedView(this.navigationContentTemplate);
	}

	togleDrawer() {
		this.matDrawerInstance.toggle();
		this.changeDetectorRef.markForCheck();
	}
}
