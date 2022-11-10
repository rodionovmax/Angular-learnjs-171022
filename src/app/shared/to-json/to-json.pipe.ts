import { Pipe, PipeTransform } from '@angular/core';
import { toJson } from './to-json';

@Pipe({
	name: 'toJson',
	pure: true,
})
export class ToJsonPipe implements PipeTransform {
	transform(value: any, prefix: string): string {
		console.log('ToJsonPipe');
		return `${prefix}: ${toJson(value)}`;
	}
}
