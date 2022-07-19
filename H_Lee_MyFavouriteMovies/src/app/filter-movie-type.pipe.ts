import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMovieType'
})
export class FilterMovieTypePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
