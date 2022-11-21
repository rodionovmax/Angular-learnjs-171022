import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of, switchMap, timer } from 'rxjs';
import { IProduct } from '../products/product.interface';
import { ProductsApiService } from '../products/products-api.service';

@Injectable({
	providedIn: 'root',
})
export class ProductsResolver implements Resolve<IProduct[]> {
	constructor(private readonly productsApiService: ProductsApiService) {}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct[]> {
		return timer(3000).pipe(switchMap(() => this.productsApiService.getProducts$()));
	}
}
