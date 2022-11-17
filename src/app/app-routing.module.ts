import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { NotFoundModule } from './modules/not-found/not-found.module';
import { CustomPreloading } from './shared/custom-preloading/custom-preloading';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/products',
		pathMatch: 'full',
	},
	{
		path: 'products',
		data: {
			needPreloading: true,
		},
		// component: ProductsListComponent,
		loadChildren: () => import('./modules/products-list/products-list.module').then(m => m.ProductsListModule),
		// children: [
		// {
		// path: '',
		// component: ProductsListComponent,
		// }
		// ] // child routes
	},
	{
		path: 'product',
		// path: 'product/:id',
		loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule),
		// component: ProductComponent,
		// children: [
		// 	{
		// 		path: '',
		// 		redirectTo: 'description',
		// 		pathMatch: 'full',
		// 	},
		// 	{
		// 		path: 'type',
		// 		component: TypeComponent,
		// 	},
		// 	{
		// 		path: 'description',
		// 		component: DescriptionComponent,
		// 	},
		// ],
	},
	{
		path: '**',
		component: NotFoundComponent,
	},
	// {
	// 	path: 'root/:id',
	// 	component: TypeComponent,
	// },
	// {
	// 	path: ':id/root',
	// 	redirectTo: 'root/:id',
	// 	pathMatch: 'full',
	// },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			// preloadingStrategy: PreloadAllModules,
			preloadingStrategy: CustomPreloading,
		}),
		NotFoundModule,
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
