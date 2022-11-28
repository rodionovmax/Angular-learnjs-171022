import { ChangeDetectionStrategy, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { applicationConfigMock } from './shared/application-config/application-config.mock';
import { productMock } from './shared/products/product.mock';
import { addProducts } from './store/products/products.actions';
import { productByIdSelect, productsFeatureSelector } from './store/products/products.selectors';
import { IState } from './store/reducer';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	readonly applicationConfig = applicationConfigMock;

	constructor(private readonly store$: Store<IState>) // private readonly store$: Store,
	{
		this.store$.pipe(select(productByIdSelect('kraskoraspylitel-matrix-57315'))).subscribe(console.log);
	}
}
