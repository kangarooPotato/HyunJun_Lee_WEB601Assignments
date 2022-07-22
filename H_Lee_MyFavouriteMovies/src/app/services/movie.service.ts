import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { DEFAULTMOVIECONTENT, MOVIES } from '../data/mock-MOVIE';
import { Content } from '../models/content';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type':
        'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  // getContent(): Observable<Content[]>{
  //   return of (MOVIES);
  // }
  getContent() : Observable<Content[]>{
    return this.http.get<Content[]>("api/movies");
    }

  addContent(newContentItem: Content): Observable<Content>{
    return this.http.post<Content>("api/movies", newContentItem, this.httpOptions)
    }
      

  // 컨텐츠 찾아오기
  // 그니까 getContent임 for반복문으로 하나하나 date폴더에서 저 위에 import 해둔 mock-MOVIE에서 긁어옴
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

     // if there aren't some movie with the same id number, push the array item
     // 만약 id가 같으면 빠꾸 먹이고 그게 아니라면 넣으셈 (체크하는거임 ㅇㅇ)
     if (!MOVIES.some(movie => movie.id === newMoiveItem.id)) {
      //console.log("there is a movie that has same ID")
      console.log("ID 같은거 없음 - input데이터 실행 성공!")
      MOVIES.push(newMoiveItem);
    } else {
      console.log("ID 같은거 있음 - input 실행 실패 ㅅㄱ")
    }
    return of(MOVIES);
  }

  // 업뎃
  updateContentItem(newMoiveItem: Content):Observable<Content[]> {

    MOVIES.forEach((individualMovie, i) => {

      if (individualMovie.id === newMoiveItem.id) // 업데이트 할 파일 찾기
      {
        console.log("같은 ID를 가진 컨텐츠를 찾았습니다");
        MOVIES[i] = newMoiveItem;
      }
    });
    return of (MOVIES);
  }

  removeContentItem(removeMoieItem: Content):Observable<Content[]> {

    //delet movie data

    // MOVIES.forEach((individualMovie, i) => {

    //   if (individualMovie.id === removeMoieItem.id) // 업데이트 할 파일 찾기
    //   {
    //     console.log("같은 ID를 가진 컨텐츠를 찾았습니다");
    //     MOVIES[i].pop;
    //   }
    // });

    return of (MOVIES);
  }

}
