import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnInit } from '@angular/core';
import { IProduct } from '../../shared/products/product.interface';
import { productsMock } from '../../shared/products/products.mock';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit, DoCheck {
	products: IProduct[] | undefined = undefined;

	constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

	ngOnInit() {
		// this.changeDetectorRef.detach();
		// this.changeDetectorRef.detectChanges();

		setTimeout(() => {
			this.products = productsMock;
			this.changeDetectorRef.markForCheck();
			// this.changeDetectorRef.detectChanges();
		}, 3000);
		setTimeout(() => {
			this.products = productsMock.map(product => ({ ...product, feedbacksCount: 4 }));
			this.changeDetectorRef.markForCheck();
			// this.changeDetectorRef.detectChanges();
		}, 6000);

		// setTimeout(() => {
		// 	this.changeDetectorRef.reattach();
		// 	this.changeDetectorRef.markForCheck();
		// }, 8000)
	}

	trackBy(_index: number, product: IProduct): string {
		// previusValue === newValue
		return product._id;
	}

	ngDoCheck() {
		this.changeDetectorRef.detectChanges();
		console.log('CD ProductsListComponent');
	}
}
