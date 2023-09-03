import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.less'],
})
export class ProductsListComponent {
	productId = '';
	@Output() buyClickList = new EventEmitter<string | undefined>();

	onBuyClick(value: string) {
		this.productId = value;
	}
}
