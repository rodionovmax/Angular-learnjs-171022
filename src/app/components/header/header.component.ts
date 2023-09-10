import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit, Attribute,
  Component,
  EventEmitter,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IApplicationConfig } from '../../shared/application-config/application-config.interface';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnChanges, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
	@Input() applicationConfig: IApplicationConfig | undefined;
  @Input() size! : string;
	@Output() menuClick = new EventEmitter<string | undefined>(true);

  // constructor(
    // @Attribute('applicationConfig') private readonly applicationConfigAttr: IApplicationConfig | undefined
    // @Attribute('size') private readonly sizeAttr: string
  // ) {
    // console.log(this.sizeAttr);
    // console.log('constructor', this.applicationConfig);
  // }

  ngOnChanges({applicationConfig, config}: SimpleChanges): void {
    if (applicationConfig) {
      console.log('applicationConfig', applicationConfig);
    }

    if (config) {
      console.log('config', config);
    }
  }

  ngOnInit(): void {
    console.log('OnInit', this.applicationConfig);
  }

  ngAfterContentInit() {
    console.log()
  }

  ngAfterContentChecked() {
    console.log()
  }

  ngAfterViewInit() {
    console.log()
  }

  ngAfterViewChecked() {
    console.log()
  }

  ngOnDestroy() {
    console.log();
  }

  // readonly imgSrc = 'Angular-learnjs-171022';
}
