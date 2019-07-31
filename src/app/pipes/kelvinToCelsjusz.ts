import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'kelvinToCelsjusz'
})
export class KtoCPipe implements PipeTransform {
	transform(value: any, args?: any): any {
		return (value - 273).toFixed(2);
	}
}
