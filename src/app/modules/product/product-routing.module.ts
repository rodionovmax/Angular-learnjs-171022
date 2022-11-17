import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { DescriptionComponent } from './description/description.component';
import { TypeComponent } from './type/type.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: ':id',
		component: ProductComponent,
		children: [
			{
				path: '',
				redirectTo: 'description',
				pathMatch: 'full',
			},
			{
				path: 'type',
				component: TypeComponent,
			},
			{
				path: 'description',
				component: DescriptionComponent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ProductRoutingModule {}
