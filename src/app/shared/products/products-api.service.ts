import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IProductDto } from './product-dto.interface';
import { IProduct } from './product.interface';

@Injectable({
	providedIn: 'root',
})
export class ProductsApiService {
	constructor(private readonly httpClient: HttpClient) {}

	getProducts$(subCategoryName: string | null): Observable<IProduct[]> {
		return this.httpClient
			.get<IProductDto>(`/products/suggestion`, {
				params: subCategoryName ? { subCat: subCategoryName } : {},
			})
			.pipe(map(({ data }) => data.items));
	}

	getProduct$(id: string): Observable<IProduct | undefined> {
		return this.httpClient.get<{ data: IProduct | undefined }>(`/products/${id}`).pipe(map(({ data }) => data));
	}
}
