import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { NotFoundModule } from './modules/not-found/not-found.module';
import { DescriptionComponent } from './modules/product/description/description.component';
import { ProductComponent } from './modules/product/product.component';
import { ProductModule } from './modules/product/product.module';
import { TypeComponent } from './modules/product/type/type.component';
import { ProductsListComponent } from './modules/products-list/products-list.component';
import { ProductsListModule } from './modules/products-list/products-list.module';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/products',
		pathMatch: 'full',
	},
	{
		path: 'products',
		component: ProductsListComponent,
	},
	{
		path: 'product',
		component: ProductComponent,
		children: [
			{
				path: '',
				redirectTo: 'description',
				pathMatch: 'full',
			},
			{
				path: 'type',
				component: TypeComponent,
			},
			{
				path: 'description',
				component: DescriptionComponent,
			},
		],
	},
	{
		path: '**',
		component: NotFoundComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes), NotFoundModule, ProductsListModule, ProductModule],
	exports: [RouterModule],
})
export class AppRoutingModule {}
