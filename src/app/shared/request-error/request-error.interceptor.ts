import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { catchError, Observable, retry, retryWhen, throwError } from 'rxjs';

@Injectable()
export class RequestErrorInterceptor implements HttpInterceptor {
	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		return next.handle(request).pipe(
			retry({
				count: 2,
				delay: 2000,
			}),
			catchError(error => {
				console.log(error);

				return throwError(() => 'Произошла ошибка');
			}),
		);
	}
}
