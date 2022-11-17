import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, Observable, of, switchMap, tap } from 'rxjs';
import { IProduct } from '../../shared/products/product.interface';
import { productMock } from '../../shared/products/product.mock';
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
	) // private readonly router: Router,
	{}

	getProducts$(): Observable<IProduct | undefined> {
		return this.activatedRoute.paramMap.pipe(
			map(paramMap => paramMap.get('id')),
			filter(Boolean), // filter(value => Boolean(value)) or filter(value => !!value)
			tap(productId => {
				this.productsStoreService.loadProduct(productId);
			}),
			switchMap(productId => this.productsStoreService.getProduct$(productId)),
			tap(console.log),
		);
	}

	// ngOnInit() {
	// setTimeout(() => {
	// 	console.log('navigate');
	// 	this.router.navigate(['product', 'kluc-aktivacii-crackdown-3-xbox-one']);
	// }, 5000)

	// console.log(this.activatedRoute.snapshot)
	// const productId = this.activatedRoute.snapshot.paramMap.get('id');

	// if (productId) {
	// 	this.productsStoreService.loadProduct(productId);
	// 	this.product$ = this.productsStoreService.getProduct$(productId);

	// 	return;
	// }

	// this.product$ = of(undefined);
	// }
}
