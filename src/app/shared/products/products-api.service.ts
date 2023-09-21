import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { BASE_URL } from '../base-url/base-url.token';
import { IProductDto } from './product-dto.interface';
import { IProduct } from './product.interface';

@Injectable({
	providedIn: 'root',
})
export class ProductsApiService {
	constructor(private readonly httpClient: HttpClient, @Inject(BASE_URL) private readonly baseUrl: string) {}

	getProducts$(): Observable<IProduct[]> {
		// return of({ data: { items: productsMock } }).pipe(map(({ data }) => data.items));
		return this.httpClient.get<IProductDto>(`/products/suggestion`).pipe(map(({ data }) => data.items));
		// return this.httpClient.get<IProductDto>(`/products/suggestion`).pipe(map(({ data }) => {
        //     const _items = data.items;
        //     console.log(`data items: ${JSON.stringify(_items)}`)
        //     return _items;
        // }));
	}
}
