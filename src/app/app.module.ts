import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './components/header/header.module';
import { SidenavModule } from './components/sidenav/sidenav.module';
import { MatListModule } from '@angular/material/list';
import { NgClassModule } from './shared/ng-class/ng-class.module';
import { InsertShadowModule } from './shared/insert-shadow/insert-shadow.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseUrlInterceptor } from './shared/base-url/base-url.interceptor';
import { StoreModule } from '@ngrx/store';
import { storeReducer } from './store/reducer';
import { storeEffects } from './store/effects';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

const devtoolsInstuments = [];

if (!environment.production) {
	devtoolsInstuments.push(StoreDevtoolsModule.instrument());
}

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
		StoreModule.forRoot(storeReducer),
		EffectsModule.forRoot(storeEffects),
		...devtoolsInstuments,
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: BaseUrlInterceptor,
			multi: true,
		},
		{
			provide: 'name',
			useValue: 'AppModule',
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
