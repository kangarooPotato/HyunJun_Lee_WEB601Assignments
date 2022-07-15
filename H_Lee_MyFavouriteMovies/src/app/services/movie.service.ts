import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { DEFAULTMOVIECONTENT, MOVIES } from '../data/mock-MOVIE';
import { Content } from '../models/content';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getContent(): Observable<Content[]>{
    return of (MOVIES);
  }

  getContentItem(id: number): Observable<Content>{

    for (var i = 0; i < MOVIES.length; i++){

      if (MOVIES[i].id === id) {
        return of(MOVIES[i]);
      }
    }
    return of(DEFAULTMOVIECONTENT);
  }

  inputContentItem(newMoiveItem: Content): Observable<Content[]> {
    MOVIES.push(newMoiveItem);
    return of(MOVIES);
  }

  updateContentItem():Observable<Content[]> {

    //update movie data

    return of (MOVIES);
  }

  removeContentItem():Observable<Content[]> {

    //delet movie data

    return of (MOVIES);
  }

}
