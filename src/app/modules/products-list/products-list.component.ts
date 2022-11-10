import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IProduct } from '../../shared/products/product.interface';
import { productsMock } from '../../shared/products/products.mock';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
	products: IProduct[] | undefined = productsMock;

	trackBy(_index: number, product: IProduct): string {
		return product._id;
	}
}
