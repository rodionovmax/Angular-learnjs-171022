import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from '../../shared/test-guards/can-deactivate.guard';
import { ProductsResolver } from '../../shared/test-guards/products.resolver';
import { ProductsListComponent } from './products-list.component';

const routes: Routes = [
	{
		path: '',
		// canDeactivate: [CanDeactivateGuard],
		// resolve: {
		// 	products: ProductsResolver,
		// },
		component: ProductsListComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ProductsListRoutingModule {}
