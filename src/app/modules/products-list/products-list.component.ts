import { Component, EventEmitter, Output } from '@angular/core';
import { productMock } from '../../shared/products/product.mock';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.less'],
})
export class ProductsListComponent {
	productId = '';
	@Output() buyClickList = new EventEmitter<string>();

	onBuyClick(value: string) {
		this.productId = value;
	}

	protected readonly productMock = productMock;
}
