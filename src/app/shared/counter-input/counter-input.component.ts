import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	selector: 'app-counter-input',
	templateUrl: './counter-input.component.html',
	styleUrls: ['./counter-input.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: CounterInputComponent,
			multi: true,
		},
	],
})
export class CounterInputComponent implements ControlValueAccessor {
	@Input() step = 1;

	counter = 0;
	isDisabled = false;

	onChange!: (_: number) => void;
	onTouched!: () => void;

	private touched = false;

	constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

	writeValue(newCounter: number) {
		this.counter = newCounter;

		this.changeDetectorRef.markForCheck();
	}

	registerOnChange(onChange: (_: number) => void): void {
		this.onChange = onChange;
	}

	registerOnTouched(onTouched: any): void {
		this.onTouched = onTouched;
	}

	setDisabledState(isDisabled: boolean): void {
		this.isDisabled = isDisabled;

		this.changeDetectorRef.markForCheck();
	}

	back() {
		this.counter -= this.step;

		this.onChange(this.counter);
		this.markTouched();
	}

	next() {
		this.counter += this.step;

		this.onChange(this.counter);
		this.markTouched();
	}

	private markTouched() {
		if (this.touched) {
			return;
		}

		this.touched = true;

		this.onTouched();
	}
}
