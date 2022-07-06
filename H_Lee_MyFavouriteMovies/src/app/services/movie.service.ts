import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOVIES, DEFAULTMOVIECONTENT } from '../data/MOVIECONTENTTYPE';
import { Content } from '../models/content';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor() { }

  getContent(): Observable<Content[]> {
    return of(MOVIES);
  }

  getContentItem(id: number): Observable<Content> {
    for (var i = 0; i < MOVIES.length; i++) // iterate through each Movie 반복문으로 영화 하나씩 돌리기
    {
      if (MOVIES[i].id === id) { // found the item 아이템 찾기
        return of(MOVIES[i]);
      }
    }
    return of(DEFAULTMOVIECONTENT); // need to return something if the content isn't there 콘텐츠 없으면 아까 만든 id -1 돌려주기
  }
}
