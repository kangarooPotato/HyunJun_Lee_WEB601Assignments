import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './models/content';

@Pipe({
  name: 'filterMovieType'
})
export class FilterMovieTypePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }


  // 만약 타입이 없으면 어떻게 되는거임? if는 있고.. else가 없는데???
  transform(listOfMovies: Content[], typeToFilterBy?: string): Content[] {
    return listOfMovies.filter(oneMovie => {
      if (typeToFilterBy) {
        // only keep movies that have their type set to be the same value as typeToFilterBy
        // Can do the long way with an if statement

        return typeToFilterBy === oneMovie.type;
      }
      return !oneMovie.type;
    });
  }

}
