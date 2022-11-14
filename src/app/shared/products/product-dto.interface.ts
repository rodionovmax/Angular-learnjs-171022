import { IProductImage } from './product-image.interface';
import { IProduct } from './product.interface';

export interface IProductDto {
	data: {
		items: IProduct[];
	};
}
