import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgIfModule } from '../../shared/ng-if/ng-if.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CarouselModule } from '../../shared/carousel/carousel.module';

@NgModule({
	declarations: [ProductsListComponent, ProductCardComponent],
	imports: [
		CommonModule,
		MatCardModule,
		MatButtonModule,
		MatIconModule,
		NgIfModule,
		MatProgressSpinnerModule,
		CarouselModule,
	],
	exports: [ProductsListComponent],
})
export class ProductsListModule {}
