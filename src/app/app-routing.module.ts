import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { NotFoundModule } from './modules/not-found/not-found.module';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/products',
		pathMatch: 'full',
	},
	{
		path: 'products',
		loadChildren: () => import('./modules/products-list/products-list.module').then(m => m.ProductsListModule),
	},
	{
		path: 'product',
		loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule),
	},
	{
		path: '**',
		component: NotFoundComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }), NotFoundModule],
	exports: [RouterModule],
})
export class AppRoutingModule {}
