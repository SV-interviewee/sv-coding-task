import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluck',
  standalone: true
})
export class PluckPipe implements PipeTransform {

  transform(value: any[], key: string): any {
    return value.map(value => value[key]);
  }

}
