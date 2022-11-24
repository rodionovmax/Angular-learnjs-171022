import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	OnChanges,
	OnDestroy,
	OnInit,
	Output,
	SimpleChanges,
} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Subject, takeUntil } from 'rxjs';
import { IProductsFilter } from '../products-filter.interface';

@Component({
	selector: 'app-products-filter',
	templateUrl: './products-filter.component.html',
	// templateUrl: './products-filter-template.component.html',
	styleUrls: ['./products-filter.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsFilterComponent implements OnInit, OnChanges, OnDestroy {
	@Input() brands!: string[] | null;

	@Output() changeFilter = new EventEmitter<IProductsFilter>();

	filterFormValue = {
		name: '',
		brands: [] as boolean[],
		priceRange: {
			min: 0,
			max: 100000,
		},
	};

	onSubmit(value: any) {
		this.changeFilter.emit({
			...value,
			brands: this.getBrandsFromObject(value.brands),
		});
	}

	getBrandsFromObject(brands: Record<string, boolean>): IProductsFilter['brands'] {
		return Object.entries(brands)
			.filter(([_brandName, isActive]) => isActive)
			.map(([brandName]) => brandName);
	}

	// readonly filterForm = new FormGroup({
	// 	name: new FormControl(''),
	// 	brands: new FormArray([]),
	// 	priceRange: new FormGroup({
	// 		min: new FormControl(0),
	// 		max: new FormControl(100000),
	// 	})
	// });

	private readonly destroy$ = new Subject<void>();

	readonly filterForm = this.formBuilder.group({
		// name: this.formBuilder.control(''),
		name: '', // this.formBuilder.control('')
		// name: this.formBuilder.control('', {validators: [Validators.required]}),
		// name: ['', {validators: [Validators.required]}],
		brands: this.formBuilder.array<FormControl<boolean>>([]),
		priceRange: this.formBuilder.group({
			min: 0,
			max: 100000,
		}),
	});

	get nameControl(): FormControl {
		return this.filterForm.get('name') as FormControl;
	}

	get priceRangeMinControl(): FormControl {
		return this.filterForm.get('priceRange')?.get('min') as FormControl;
	}

	get priceRangeMaxControl(): FormControl {
		return this.filterForm.get(['priceRange', 'max']) as FormControl;
	}

	constructor(private readonly formBuilder: FormBuilder) {}

	ngOnInit() {
		// this.filterForm.get('brands')?.valueChanges.subscribe(console.log);
		// this.filterForm.get('name')?.valueChanges.subscribe(console.log);
		setTimeout(() => {
			// this.filterForm.setValue({
			// 	name: '3',
			// 	brands: [],
			// 	priceRange: {
			// 		max: 10,
			// 		min: 1,
			// 	}
			// });
			this.filterForm.patchValue(
				{
					priceRange: {
						max: 99,
					},
				},
				{
					emitEvent: false,
				},
			);
		}, 2000);

		this.filterForm.valueChanges
			.pipe(
				map(filter => ({
					...filter,
					brands: this.getBrandsListFromArray(filter.brands),
				})),
				takeUntil(this.destroy$),
			)
			.subscribe(filter => {
				this.changeFilter.emit(filter as IProductsFilter);
			});
	}

	ngOnChanges({ brands }: SimpleChanges) {
		if (brands) {
			const brandsControlList = this.brands
				? (this.brands.map(() => new FormControl(false)) as FormControl<boolean>[])
				: ([] as FormControl<boolean>[]);

			this.filterForm.setControl('brands', new FormArray(brandsControlList));
			// this.filterForm.get('brands')?.valueChanges.pipe(map(vale => this.getBrandsListFromArray(vale))).subscribe(console.log);
		}
	}

	ngOnDestroy() {
		this.destroy$.next();
		this.destroy$.complete();
	}

	getBrandControl(index: number): FormControl {
		return this.filterForm.get(['brands', index]) as FormControl;
	}

	private getBrandsListFromArray(brandsActiveList: boolean[] | undefined): IProductsFilter['brands'] {
		if (!this.brands || !brandsActiveList) {
			return [];
		}

		return this.brands.filter((_, index) => brandsActiveList[index]);
	}
}
