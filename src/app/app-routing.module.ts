import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { NotFoundModule } from './modules/not-found/not-found.module';
import { CanActivateGuard } from './shared/test-guards/can-activate.guard';
import { CanDeactivateGuard } from './shared/test-guards/can-deactivate.guard';
import { CanLoadGuard } from './shared/test-guards/can-load.guard';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/products',
		pathMatch: 'full',
	},
	{
		path: 'products',
		// canDeactivate: [CanDeactivateGuard],
		// canLoad: [CanLoadGuard],
		loadChildren: () => import('./modules/products-list/products-list.module').then(m => m.ProductsListModule),
	},
	{
		path: 'product',
		canActivate: [CanActivateGuard],
		// canLoad: [CanLoadGuard],
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
