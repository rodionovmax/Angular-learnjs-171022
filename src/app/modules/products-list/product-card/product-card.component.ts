import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../../shared/products/product.interface';
import { productMock } from '../../../shared/products/product.mock';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.less'],
})
export class ProductCardComponent {
	@Input() product: IProduct | undefined;
	@Output() productBuy = new EventEmitter<IProduct['_id'] | undefined>();

	get firstImgUrl(): string {
		return this.product?.images[0].url || '';
	}

	get price(): string {
		return this.product?.price.toString() || '-';
	}

	get feedbacksCount(): string {
		return this.product?.feedbacksCount.toString() || '-';
	}

	onProductBuy(event: Event) {
		event.stopPropagation();

		console.log('Buy');
	}

	isStarActive(starIndex: number): boolean {
		return Boolean(this.product && this.product.rating >= starIndex);
	}
}
