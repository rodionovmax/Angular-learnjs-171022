import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { IProduct } from '../../shared/products/product.interface';

export const PRODUCTS_STATE = 'products';

// export interface IProductsState extends Array<IProduct> {}
// IProductsState === Array<IProduct> === IProduct[]

// export type IProductsState = {[id: string]: IProduct}

// export interface IProductsState {
//     // entities: {[id: string]: IProduct},
//     entities: Record<string, IProduct>,
//     ids: Array<IProduct['_id']>,
// }
// ids.map(id => entities[id]) as IProduct[]

export interface IProductsState extends EntityState<IProduct> {
	currentProductId: string | null;
}

export const productsAdapter = createEntityAdapter<IProduct>({
	selectId: ({ _id }: IProduct) => _id,
	sortComparer: (a, b) => {
		if (a.name > b.name) {
			return 1;
		}

		if (a.name < b.name) {
			return -1;
		}

		return 0;
	}, // ids.filter((idA, idB) => sortComparer(entities[idA], entities[idB]))
});
