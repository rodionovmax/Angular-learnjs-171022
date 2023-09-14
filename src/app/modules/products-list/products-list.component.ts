import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { productMock } from '../../shared/products/product.mock';
import { IProduct } from '../../shared/products/product.interface';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.less'],
})
export class ProductsListComponent implements OnInit{
	productId = '';
	@Output() buyClickList = new EventEmitter<string>();

	onBuyClick(value: string) {
		this.productId = value;
	}

	productMock: IProduct | undefined = undefined;

	ngOnInit(): void {
		// setTimeout(() => {
		// 	this.productMock = productMock
		// }, 4000)
		// setTimeout(() => {
		// 	this.productMock = undefined
		// }, 6000)
		// setTimeout(() => {
		// 	this.productMock = {...productMock}
		// }, 8000)
		setTimeout(() => {
			this.productMock = productMock
		}, 3000)
	}

	protected readonly undefined = undefined;
}
