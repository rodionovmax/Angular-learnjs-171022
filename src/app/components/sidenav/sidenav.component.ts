import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.less'],
})
export class SidenavComponent {
	@ViewChild(MatDrawer, { static: true })
	private matDrawerInstance!: MatDrawer;

	togleDrawer() {
		this.matDrawerInstance.toggle();
	}
}
