import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Observable, startWith, tap } from 'rxjs';
import { BrandsService } from '../../shared/brands/brands.service';
import { IProduct } from '../../shared/products/product.interface';
import { ProductsStoreService } from '../../shared/products/products-store.service';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit {
	readonly brands$ = this.brandsService.brands$;
	readonly products$: Observable<IProduct[] | null> = this.productsStoreService.products$;

	readonly searchControl = new FormControl('');
	readonly searchControlValue$ = this.searchControl.valueChanges.pipe(
		debounceTime(300),
		startWith(this.searchControl.value),
		distinctUntilChanged(),
	);

	readonly counterControl = new FormControl(1);
	counter = 1;

	searchValue = '';

	constructor(
		private readonly productsStoreService: ProductsStoreService,
		private readonly brandsService: BrandsService,
	) {}

	ngOnInit() {
		this.productsStoreService.loadProducts();
		this.brandsService.loadBrands(null);
	}

	trackBy(_index: number, product: IProduct): string {
		return product._id;
	}
}
