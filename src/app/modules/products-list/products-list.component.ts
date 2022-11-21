import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, map, Observable, startWith, tap } from 'rxjs';
import { IProduct } from '../../shared/products/product.interface';
import { ProductsStoreService } from '../../shared/products/products-store.service';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit {
	readonly products$: Observable<IProduct[] | null> = this.productsStoreService.products$;
	// readonly products$: Observable<IProduct[] | null> = this.activatedRoute.data.pipe(
	// 	map(({products}) => products),
	// );

	readonly searchControl = new FormControl('');
	readonly searchControlValue$ = this.searchControl.valueChanges.pipe(
		debounceTime(300),
		startWith(this.searchControl.value),
		distinctUntilChanged(),
		tap(console.log),
	);

	readonly counterControl = new FormControl(1);
	counter = 1;

	searchValue = '';

	constructor(
		private readonly productsStoreService: ProductsStoreService,
		@Inject('name') private readonly name: string,
	) // private readonly activatedRoute: ActivatedRoute,
	{
		console.log(this.name);
	}

	ngOnInit() {
		this.productsStoreService.loadProducts();
		this.counterControl.disable();

		setTimeout(() => {
			console.log(this.counterControl.touched);
			this.counterControl.enable();
			// this.counterControl.setValue(33);
		}, 3000);
		// this.searchControl.setValue('123');
		// this.searchValue = '123';
		// this.activatedRoute.data.subscribe(console.log);
	}

	trackBy(_index: number, product: IProduct): string {
		return product._id;
	}
}
