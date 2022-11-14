import { Inject, Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { BASE_URL } from './base-url.token';
import { IProductDto } from '../products/product-dto.interface';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
	constructor(@Inject(BASE_URL) private readonly baseUrl: string) {}

	intercept(request: HttpRequest<unknown>, httpHandler: HttpHandler): Observable<HttpEvent<unknown>> {
		const newRequest = request.clone({
			url: this.baseUrl + request.url,
		});

		return httpHandler.handle(newRequest);
		// .pipe(
		// map((responce: HttpEvent<any>): HttpEvent<any> => responce instanceof HttpResponse
		//   ? responce.clone({
		//     body: responce.body.data.items,
		//   })
		//   : responce
		// ),
		// );
	}
}
