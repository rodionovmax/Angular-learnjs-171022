import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { mergeMap, Observable, Subject } from 'rxjs';

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
		return preloadingSubject$.pipe(mergeMap(() => load()));
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
