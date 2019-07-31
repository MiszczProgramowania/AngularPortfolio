import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'nameCity'
})
export class NameCityPipe implements PipeTransform {
	transform(value: any, args?: any): any {
		return value;
	}
}
