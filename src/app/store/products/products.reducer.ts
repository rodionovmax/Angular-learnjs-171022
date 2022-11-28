import { createReducer, on } from '@ngrx/store';
import { addProducts } from './products.actions';
import { IProductsState, productsAdapter } from './products.state';

const initialState: IProductsState = productsAdapter.getInitialState({
	currentProductId: null,
});

export const productsReducer = createReducer(
	initialState,
	on(addProducts, (state: IProductsState, { products }) => productsAdapter.addMany(products, state)), // addProducts.type === action.type
);
