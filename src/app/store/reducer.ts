// {} => State

import { ActionReducerMap } from '@ngrx/store';
import { productsReducer } from './products/products.reducer';
import { IProductsState, PRODUCTS_STATE } from './products/products.state';

// {user: ...} => State

// {user: { user - фича ветка
//  name: string, - подветка
//  surname: string, - подветка
//  favorites: string[], - подветка
//  ...
// }} => State

// applicationReducer = {
//  user: userReducer
//  ...
// }

export interface IState {
	[PRODUCTS_STATE]: IProductsState;
	// products: IProductsState,
}

export const storeReducer: ActionReducerMap<IState> = {
	[PRODUCTS_STATE]: productsReducer,
};
