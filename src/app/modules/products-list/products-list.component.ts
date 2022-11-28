import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, distinctUntilChanged, map, Observable, startWith, Subject, takeUntil, tap } from 'rxjs';
import { BrandsService } from '../../shared/brands/brands.service';
import { IProduct } from '../../shared/products/product.interface';
import { ProductsStoreService } from '../../shared/products/products-store.service';
import { isStringAsyncValidator } from '../../shared/validation/is-string-async.validator';
import { isStringValidator } from '../../shared/validation/is-string.validator';
import { IProductsFilter } from './products-filter.interface';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit {
	readonly brands$ = this.brandsService.brands$;
	readonly products$: Observable<IProduct[] | null> = this.productsStoreService.products$;

	private readonly destroy$ = new Subject<void>();

	readonly searchControl = new FormControl('', {
		validators: [Validators.minLength(3), Validators.required],
		// asyncValidators: [this.isStringAsyncValidator.bind(this)],
		asyncValidators: [isStringAsyncValidator],
		// updateOn: 'blur'
	});
	readonly searchControlValue$ = this.searchControl.valueChanges.pipe(
		debounceTime(300),
		startWith(this.searchControl.value),
		distinctUntilChanged(),
	);
	readonly searchControlErrors$ = this.searchControl.statusChanges.pipe(
		map(status => (status === 'INVALID' ? this.searchControl.errors : null)),
		startWith(this.searchControl.errors),
		distinctUntilChanged(),
	);

	// private isStringAsyncValidator(control: AbstractControl): Observable<ValidationErrors | null> {
	// 	return (isStringAsyncValidator(control) as Observable<ValidationErrors | null>).pipe(
	// 		tap(() => {
	// 			this.changeDetectorRef.markForCheck();
	// 		})
	// 	)
	// }

	searchValue = '';

	constructor(
		private readonly productsStoreService: ProductsStoreService,
		private readonly brandsService: BrandsService,
		private readonly activatedRoute: ActivatedRoute, // private changeDetectorRef: ChangeDetectorRef,
	) {}

	ngOnInit() {
		// console.log(Validators.minLength(3)(new FormControl('')));
		// console.log(Validators.minLength(3)(new FormControl(' ')));
		// this.productsStoreService.loadProducts(null);
		// this.brandsService.loadBrands(null);
		this.listenSubCategoryIdFromUrl();
	}

	onFilterChange(filter: IProductsFilter) {
		console.log(filter);
	}

	trackBy(_index: number, product: IProduct): string {
		return product._id;
	}

	private listenSubCategoryIdFromUrl() {
		this.activatedRoute.paramMap
			.pipe(
				map(paramMap => paramMap.get('subCategoryId')),
				takeUntil(this.destroy$),
			)
			.subscribe(subCategoryId => {
				this.productsStoreService.loadProducts(subCategoryId);
				this.brandsService.loadBrands(subCategoryId);
			});
	}
}
