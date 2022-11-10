import { ChangeDetectionStrategy, Component } from '@angular/core';
import { applicationConfigMock } from './shared/application-config/application-config.mock';
import { ProductsStoreService } from './shared/products/products-store.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less'],
	providers: [
		// {
		// 	provide: 'name',
		// 	useValue: 'AppComponent',
		// },
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	readonly applicationConfig = applicationConfigMock;

	// constructor(
	// 	private readonly productsStoreService: ProductsStoreService,
	// ) {
	// 	console.log(this.productsStoreService);
	// }
}
