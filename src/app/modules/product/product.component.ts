import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, Observable, switchMap, tap } from 'rxjs';
import { IProduct } from '../../shared/products/product.interface';
import { ProductsStoreService } from '../../shared/products/products-store.service';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
	readonly product$ = this.getProducts$();

	constructor(
		private readonly activatedRoute: ActivatedRoute,
		private readonly productsStoreService: ProductsStoreService,
	) {}

	getProducts$(): Observable<IProduct | undefined> {
		return this.activatedRoute.paramMap.pipe(
			map(paramMap => paramMap.get('id')),
			filter(Boolean),
			tap(productId => {
				this.productsStoreService.loadProduct(productId);
			}),
			switchMap(productId => this.productsStoreService.getProduct$(productId)),
		);
	}
}
