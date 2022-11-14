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
import { baseUrl } from './shared/base-url/base-url.const';
import { BASE_URL } from './shared/base-url/base-url.token';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseUrlInterceptor } from './shared/base-url/base-url.interceptor';
import { RequestErrorInterceptor } from './shared/request-error/request-error.interceptor';
import { NotFoundModule } from './modules/not-found/not-found.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HeaderModule,
		SidenavModule,
		MatListModule,
		NgClassModule,
		InsertShadowModule,
		HttpClientModule,
	],
	providers: [
		// {
		// 	provide: BASE_URL,
		// 	useValue: baseUrl,
		// }
		// HttpClient,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: BaseUrlInterceptor,
			multi: true,
		},
		// {
		// 	provide: HTTP_INTERCEPTORS,
		// 	useClass: RequestErrorInterceptor,
		// 	multi: true,
		// },
	],
	bootstrap: [AppComponent],
})
export class AppModule {}

// request: BaseUrlInterceptor -> RequestErrorInterceptor
// responce: RequestErrorInterceptor -> BaseUrlInterceptor
