import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormControl, FormsModule, NgModel } from '@angular/forms';
import { IsStringValidatorDirective } from './is-string-validator.directive';
import { ValidationDirectivesModule } from './validation-directives.module';

// describe('IsStringValidatorDirective', () => {
// 	const directive = new IsStringValidatorDirective();

// 	it('should create an instance', () => {
// 		expect(directive).toBeTruthy();
// 	});

// 	it('Форма с числом', () => {
//         const error = directive.validate(new FormControl('123'));

// 		expect(error).toEqual({isStringValidator: 'input value is not string'});
// 	});

// 	it('Форма без числа', () => {
//         const error = directive.validate(new FormControl('String'));

// 		expect(error).toBeNull();
// 	});
// });

@Component({
	selector: 'app-test',
	template: '<input #input [ngModel]="search" appIsStringValidator />',
})
class TestComponent {
	search = '123';

	@ViewChild('input', { static: true, read: NgModel })
	readonly model!: NgModel;
}

describe('IsStringValidatorDirective', () => {
	let fixture: ComponentFixture<TestComponent>;
	let component: TestComponent;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [TestComponent],
			imports: [ValidationDirectivesModule, FormsModule],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TestComponent);
		component = fixture.componentInstance;
	});

	it('Ошибка при старте', fakeAsync(() => {
		fixture.detectChanges();

		tick(0);

		const error = component.model.errors;

		expect(error).toEqual({ isStringValidator: 'input value is not string' });
	}));
});
