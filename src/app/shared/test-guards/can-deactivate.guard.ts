import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class CanDeactivateGuard<T> implements CanDeactivate<T> {
	canDeactivate(
		component: T,
		currentRoute: ActivatedRouteSnapshot,
		currentState: RouterStateSnapshot,
		nextState?: RouterStateSnapshot,
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		console.log(component, currentRoute, currentState, nextState);
		return window.prompt('Хотите покинуть данную страницу? Прогресс будет потерян!') === 'Y';
	}
}
