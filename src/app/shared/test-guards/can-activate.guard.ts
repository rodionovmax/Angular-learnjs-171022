import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class CanActivateGuard implements CanActivate {
	constructor(private readonly router: Router) {}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot,
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		console.log(route, state);

		// this.router.navigate(['/products']);

		return window.prompt('Хотите посетить данную страницу?') === 'Y' || this.router.createUrlTree(['/products']);
		// return false;
	}
}
