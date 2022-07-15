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

  //

  getContentItem(id: number): Observable<Content>{

    for (var i = 0; i < MOVIES.length; i++){

      if (MOVIES[i].id === id) {
        return of(MOVIES[i]);
      }
    }
    return of(DEFAULTMOVIECONTENT);
  }


  // 넣기
  inputContentItem(newMoiveItem: Content): Observable<Content[]> {

     // if there aren't some chess champions with the same id number, push the array item
     // 만약 id가 같으면 빠꾸 먹이고 그게 아니라면 넣으셈 (체크하는거임 ㅇㅇ)
     if (!MOVIES.some(movie => movie.id === newMoiveItem.id)) {
      //console.log("there is a movie that has same ID")
      console.log("아이디 같은거 없음 - 실행 성공!")
      MOVIES.push(newMoiveItem);
    } else {
      console.log("아이디 같은거 있음 - 실행 실패 ㅅㄱ")
    }
    return of(MOVIES);
  }

  // 업뎃
  updateContentItem(newMoiveItem: Content):Observable<Content[]> {

    MOVIES.forEach((individualMovie, index) => {

      if (individualMovie.id === newMoiveItem.id) // 파일 찾기
      {
        console.log("매소드 두번재꺼 실행중");
        MOVIES[index] = newMoiveItem;
      }
    });
    return of (MOVIES);
  }

  removeContentItem():Observable<Content[]> {

    //delet movie data

    return of (MOVIES);
  }

}
