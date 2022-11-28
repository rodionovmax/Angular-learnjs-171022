import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { map, switchMap, tap, withLatestFrom } from 'rxjs';
import { ProductsApiService } from '../../shared/products/products-api.service';
import { IState } from '../reducer';
import { addProducts, loadProducts } from './products.actions';
import { productsSelector } from './products.selectors';

@Injectable({
	providedIn: 'root',
})
export class ProductsEffects {
	constructor(
		private readonly actions$: Actions,
		private readonly productsApiService: ProductsApiService,
		private readonly store$: Store<IState>,
	) {}

	loadProducts$ = createEffect(() =>
		this.actions$.pipe(
			// filter(action => action.type === loadProducts.type),
			ofType(loadProducts),
			switchMap(({ subCategoryId }) =>
				this.productsApiService.getProducts$(subCategoryId).pipe(map(products => addProducts(products))),
			),
		),
	);

	addProducts$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(addProducts),
				map(({ products }) => products),
				withLatestFrom(this.store$.pipe(select(productsSelector))),
				tap(([actionProducts, storeProducts]) => {
					console.log(actionProducts, storeProducts);
				}),
			),
		{ dispatch: false },
	);
}
