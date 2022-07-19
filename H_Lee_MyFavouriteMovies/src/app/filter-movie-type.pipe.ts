import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './models/content';

@Pipe({
  name: 'filterMovieType'
})
export class FilterMovieTypePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(listOfMovies: Content[], typeToFilterBy?: string): Content[] {
    return listOfMovies.filter(oneMovie => {
      // Write the code that decides if we keep the chess player or not
      if (typeToFilterBy) {
        // only keep chess players that have their type set to be the same value as typeToFilterBy
        // Can do the long way with an if statement
        // if (typeToFilterBy === chessPlayer.type) {
        //   return true;
        // }
        // else {
        //   return false;
        // }
        // can return just the comparison directly
        return typeToFilterBy === oneMovie.type;
      }
      return !oneMovie.type;
    });
  }

}
