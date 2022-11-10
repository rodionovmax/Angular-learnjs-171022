import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { IProduct } from './product.interface';
import { productsMock } from './products.mock';

@Injectable({
	providedIn: 'root',
})
export class ProductsApiService {
	getProducts$(): Observable<IProduct[]> {
		return of({ data: { items: productsMock } }).pipe(map(({ data }) => data.items));
	}
}
