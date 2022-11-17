import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { mergeMap, Observable, of, Subject, switchMap } from 'rxjs';

const preloadingSubject$ = new Subject<string>();

setTimeout(() => {
	preloadingSubject$.next('product');
}, 6000);
setTimeout(() => {
	preloadingSubject$.next('product');
}, 7000);

@Injectable({
	providedIn: 'root',
})
export class CustomPreloading implements PreloadingStrategy {
	constructor() {}

	preload(route: Route, load: () => Observable<any>): Observable<any> {
		return preloadingSubject$.pipe(
			mergeMap(() => load()),
			// mergeMap(path => route.path === path
			//   ? load()
			//   : of(null)
			// )
		);
	}
}
// export class CustomPreloading implements PreloadingStrategy {
//   preload(route: Route, load: () => Observable<any>): Observable<any> {
//     if (route.data?.['needPreloading']) {
//       console.log('Preload', route);

//       return load();
//     }

//     console.log('No Preload', route);

//     return of(null);
//   }
// }

// start application

// start preloading stratagy

// CustomPreloading.preload(routes[1], () => ...).pipe(take(1)).subscribe(...) // path: 'products'
// CustomPreloading.preload(routes[2], () => ...).pipe(take(1)).subscribe(...) // path: 'product'

// спустя 6 сек
// load() for path: 'products'
// load() for path: 'product'

// спустя 7 сек
// реации нет
// реации нет

// переход до отработки прелоадинг статегии - 'products'
// загружается 'products' Route т.к. перешли на него
// load() for path: 'products' - не вызовется т.к. чанк уже находится в кэше
