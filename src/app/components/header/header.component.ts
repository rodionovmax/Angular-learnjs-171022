import {
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
	Attribute,
	Component,
	DoCheck,
	EventEmitter,
	Input,
	OnChanges,
	OnDestroy,
	OnInit,
	Output,
	SimpleChanges,
} from '@angular/core';
import { IApplicationConfig } from '../../shared/application-config/application-config.interface';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.less'],
})
// implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
export class HeaderComponent {
	@Input() applicationConfig: IApplicationConfig | undefined;
	// @Input() config: IApplicationConfig | undefined;
	@Output() menuClick = new EventEmitter<string | undefined>(true);

	// constructor(
	// @Attribute('size') private readonly sizeAttr: string,
	// ) {
	// console.log(this.sizeAttr);
	// console.log('constructor', this.applicationConfig);
	// }

	// ngOnChanges({applicationConfig, config}: SimpleChanges) {
	// 	if (applicationConfig) {
	// 		// applicationConfig.currentValue === this.applicationConfig
	// 		console.log('applicationConfig', applicationConfig);
	// 	}

	// 	if (config) {
	// 		console.log('config', config)
	// 	}
	// }

	// ngOnInit() {
	// 	console.log('OnInit', this.applicationConfig);
	// }

	// ngDoCheck() {

	// }

	// ngAfterContentInit() {

	// }

	// ngAfterContentChecked() {

	// }

	// ngAfterViewInit() {

	// }

	// ngAfterViewChecked() {

	// }

	// ngOnDestroy() {

	// }
}
