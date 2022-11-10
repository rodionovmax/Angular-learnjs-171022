import {
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	Host,
	Inject,
	OnInit,
	Optional,
	Self,
	SkipSelf,
} from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProduct } from '../../shared/products/product.interface';
import { ProductsStoreService } from '../../shared/products/products-store.service';
import { productsMock } from '../../shared/products/products.mock';
import { toJson } from '../../shared/to-json/to-json';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		{
			provide: 'name',
			useValue: 'ProductsListComponent',
		},
	],
})
export class ProductsListComponent implements OnInit {
	readonly products$: Observable<IProduct[] | null> = this.productsStoreService.products$;

	// private productsStoreService!: ProductsStoreService;

	constructor(
		// @Inject(ProductsStoreService) private readonly productsStoreService: ProductsStoreService,
		private readonly productsStoreService: ProductsStoreService,
		@Optional() @Self() @Inject('name') private readonly name: string,
		// @Optional() @SkipSelf() @Inject('name') private readonly parentName: string,
		@Optional() @Host() @SkipSelf() @Inject('name') private readonly hostName: string,
	) // private readonly elementRef: ElementRef,
	// @Inject('ProductsStoreService') private readonly productsStoreServiceStr: ProductsStoreService,
	// @Inject('products$') readonly products$: Observable<IProduct[] | null>,
	// @Inject(1234) readonly value: any,
	{
		console.log(this.name);
		// console.log(this.parentName);
		console.log(this.hostName);
		// console.log(this.elementRef.nativeElement);
		// console.log(this.productsStoreService === this.productsStoreServiceStr);
		// console.log(this.productsStoreServiceStr);
		// this.productsStoreService = new ProductsStoreService(
		// 	new A(
		// 		new C(),
		// 		new GainNode(
		// 			...
		// 		),
		// 	),
		// 	new BarProp(),
		// );
		// this.products$ = this.productsStoreService.products$;
	}

	ngOnInit() {
		this.productsStoreService.loadProducts();
	}

	// value = {
	// 	name: '123',
	// }

	// ngOnInit(): void {
	// 	setTimeout(() => {
	// 		this.value.name = '321';
	// 	}, 4000)
	// }

	trackBy(_index: number, product: IProduct): string {
		return product._id;
	}

	getJson(value: any): string {
		console.log('ProductsListComponent');
		return toJson(value);
	}
}
