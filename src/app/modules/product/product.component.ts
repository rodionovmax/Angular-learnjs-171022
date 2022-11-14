import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { productMock } from '../../shared/products/product.mock';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
	readonly product$ = of(productMock);

	constructor(private readonly router: Router, private readonly activatedRoute: ActivatedRoute) {}

	onNavigateDescrition() {
		// this.router.navigate(['./description'], {relativeTo: this.activatedRoute});
		this.router.navigateByUrl(this.router.createUrlTree(['./description'], { relativeTo: this.activatedRoute }));
	}
}
