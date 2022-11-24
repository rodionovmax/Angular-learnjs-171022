import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgIfModule } from '../../shared/ng-if/ng-if.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CarouselModule } from '../../shared/carousel/carousel.module';
import { PaginationModule } from '../../shared/pagination/pagination.module';
import { ToJsonModule } from '../../shared/to-json/to-json.module';
import { FilterByParamModule } from '../../shared/filter-by-param/filter-by-param.module';
import { RouterModule } from '@angular/router';
import { ProductsListRoutingModule } from './products-list-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CounterInputModule } from '../../shared/counter-input/counter-input.module';
import { ProductsFilterComponent } from './products-filter/products-filter.component';

@NgModule({
	declarations: [ProductsListComponent, ProductCardComponent, ProductsFilterComponent],
	imports: [
		CommonModule,
		MatCardModule,
		MatButtonModule,
		MatIconModule,
		NgIfModule,
		MatProgressSpinnerModule,
		CarouselModule,
		PaginationModule,
		ToJsonModule,
		MatInputModule,
		FilterByParamModule,
		RouterModule,
		ProductsListRoutingModule,
		ReactiveFormsModule,
		FormsModule,
		CounterInputModule,
		MatCheckboxModule,
	],
	providers: [
		{
			provide: 'name',
			useValue: 'ProductsListModule',
		},
	],
	exports: [ProductsListComponent],
})
export class ProductsListModule {}
