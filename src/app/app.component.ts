import { ApplicationRef, ChangeDetectionStrategy, Component, DoCheck, OnChanges } from '@angular/core';
import { applicationConfigMock } from './shared/application-config/application-config.mock';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less'],
	// changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements DoCheck {
	readonly applicationConfig = applicationConfigMock;

	constructor(private readonly applicationRef: ApplicationRef) {
		// setInterval(() => {
		// 	this.applicationRef.tick(); // CD for application
		// }, 5)
	}

	ngDoCheck() {
		console.log('CD App');
	}
}
