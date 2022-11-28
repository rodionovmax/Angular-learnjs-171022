import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';
import { HeaderModule } from './header.module';

describe('HeaderComponent', () => {
	let component: HeaderComponent;
	let fixture: ComponentFixture<HeaderComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [HeaderModule],
		}).compileComponents();

		fixture = TestBed.createComponent(HeaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('Клик по меню', () => {
		const menuClickEmitSpy = spyOn(component.menuClick, 'emit');
		const triggerEvent = new Event('click');

		fixture.debugElement.query(By.css('[test-id="header-menu-button"]')).triggerEventHandler('click', triggerEvent);

		expect(menuClickEmitSpy).toHaveBeenCalled();
	});

	it('Клик по меню', done => {
		const triggerEvent = new Event('click');

		component.menuClick.subscribe(() => {
			done();
		});

		fixture.debugElement.query(By.css('[test-id="header-menu-button"]')).triggerEventHandler('click', triggerEvent);
	});
});
