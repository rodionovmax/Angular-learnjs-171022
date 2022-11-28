import { createAction } from '@ngrx/store';
import { IProduct } from '../../shared/products/product.interface';

export enum ProductsActionTypes {
	AddProducts = '[Products] Add products',
	LoadProducts = '[Products] Load products',
}

export const addProducts = createAction(ProductsActionTypes.AddProducts, (products: IProduct[]) => ({ products }));

export const loadProducts = createAction(ProductsActionTypes.LoadProducts, (subCategoryId?: string | null) => ({
	subCategoryId,
}));

// addProducts(productsMock) => {type: PuctsActionTypes.AddProducts, products: productsMock}
// addProducts(productsMock, ...) => {type: PuctsActionTypes.AddProducts, products: productsMock, ...}

// Как было раньше

// export class AddProducts {
// type: ProductsActionTypes.AddProducts

// constructor(products) {
// this.products = products;
// }
// or
// constructor(orivate readonly products: IProduct[]) {}
// }
// AddProducts == addProducts

// new AddProducts(productsMock) => {type: PuctsActionTypes.AddProducts, products: productsMock}
