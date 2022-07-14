import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOVIES, DEFAULTMOVIECONTENT } from '../data/mock-MOVIE';
import { Content } from '../models/content';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor() { }


  getContent1(): Content[] {
    return MOVIES;
  }

  //이거 말고 아래꺼 해야하는 이유???

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

  addContentItem(newContentItem: Content): Observable<Content[]> {
    MOVIES.push(newContentItem);
    return of(MOVIES);
  }

  updateContentItem(newContentItem: Content): Observable<Content[]> {
    
    MOVIES.forEach((oneMovie, index) => {
      // one potential solution
      // if (individualChessChampion.id === newContentItem.id) // found them
      // {
      //   individualChessChampion.title = newContentItem.title;
      //   individualChessChampion.body = newContentItem.body;
      //   individualChessChampion.author = newContentItem.author;
      //   individualChessChampion.imageLink = newContentItem.imageLink;
      //   individualChessChampion.type = newContentItem.type;
      //   individualChessChampion.hashtags = newContentItem.hashtags;
      //   // return;
      // }
      if (oneMovie.id === newContentItem.id) // found them
      {
        console.log("Trying method 2");
        MOVIES[index] = newContentItem;
        // return;
      }
    });
    
    return of(MOVIES);
  }
}
