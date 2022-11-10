import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './components/header/header.module';
import { ProductsListModule } from './modules/products-list/products-list.module';
import { SidenavModule } from './components/sidenav/sidenav.module';
import { MatListModule } from '@angular/material/list';
import { NgClassModule } from './shared/ng-class/ng-class.module';
import { InsertShadowModule } from './shared/insert-shadow/insert-shadow.module';
import { ProductsStoreService } from './shared/products/products-store.service';
import { ProductsApiService } from './shared/products/products-api.service';

// NullInjector

// PlatformInjector

// RootInjector(AppModuleInjector)

// ProductsListModuleInjector // если лениво-загружаемый

// AppComponentElementInjector

// ...

// SidenavElementInjector

// ProductsListElementInjector

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HeaderModule,
		ProductsListModule,
		SidenavModule,
		MatListModule,
		NgClassModule,
		InsertShadowModule,
	],
	providers: [
		// {
		// 	provide: 'name',
		// 	useValue: 'AppModule',
		// },
		// ProductsApiService,
		// ProductsStoreService,
		// {
		// 	provide: ProductsStoreService, // token
		// 	useClass: ProductsStoreService, // new ProductsStoreService()
		// }
		// {
		// 	provide: ProductsStoreService,
		// 	useValue: {},
		// },
		// {
		// 	provide: 'ProductsStoreService', // токен псевдоним
		// 	useExisting: ProductsStoreService, // существующий токен
		// }
		// {
		// 	provide: 'ProductsStoreService',
		// 	// useFactory: () => new ProductsStoreService() // useClass/useValue
		// 	useFactory: (productsStoreService: ProductsStoreService) => productsStoreService, // useExisting
		// 	deps: [ProductsStoreService],
		// 	// multi: true,
		// },
		// {
		// 	provide: 'ProductsStoreService',
		// 	useValue: {},
		// 	multi: true,
		// },
		// {
		// 	provide: 'products$',
		// 	useFactory: (productsStoreService: ProductsStoreService) => productsStoreService.products$,
		// 	deps: [ProductsStoreService],
		// }
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
