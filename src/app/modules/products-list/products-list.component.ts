import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, map, Observable, takeUntil } from 'rxjs';
import { BrandsService } from '../../shared/brands/brands.service';
import { DestroyService } from '../../shared/destroy/destroy.service';
import { IProduct } from '../../shared/products/product.interface';
import { ProductsStoreService } from '../../shared/products/products-store.service';
import { IProductsFilter } from './products-filter.interface';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [DestroyService],
})
export class ProductsListComponent implements OnInit {
	readonly brands$ = this.brandsService.brands$;
	readonly products$: Observable<IProduct[] | null> = this.productsStoreService.products$;

	private readonly _searchText$ = new BehaviorSubject<string>('');

	constructor(
		private readonly productsStoreService: ProductsStoreService,
		private readonly brandsService: BrandsService,
		private readonly activatedRoute: ActivatedRoute,
		private readonly destroy$: DestroyService,
	) {}

	get searchText$(): Observable<string> {
		return this._searchText$.asObservable();
	}

	ngOnInit() {
		this.listenSubCategoryIdFromUrl();
	}

	onFilterChange(filter: IProductsFilter) {
		this._searchText$.next(filter.name);
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
