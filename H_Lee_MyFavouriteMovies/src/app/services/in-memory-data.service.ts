import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { MOVIES } from '../data/mock-MOVIE';
import { Content } from '../models/content';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    // setting it to the value of our array of content
    // 데이터 베이스 만드는듯
    // 그리고 그 어레이 오브 데이터(content)를 리턴해줌
    const movies: Content[] = MOVIES;
    return { movies };
  }

  // id 가져오기 인데 
  // 시뮬레이션된 데이터베이스에 새 콘텐츠를 추가할때 새 콘텐츠의 아이디를 설정해야하는데 그때 돌림
  genId(movies: Content[]): number {

    // ( ? <- 조건이 참인경우 왼쪽꺼 실행, 아닌경우 : 다음꺼 실행)
    // 콘텐츠 랭쓰(영화 데이터)가 하나라도 있으면(over 0) 콘텐츠 아이디에 +1 줌
    // 그게 아니라면 0으로 설정 ( : <- 이게 그 역할임 ) ( || <- 는 둘 중 하나만 트루면 트루를 리턴함)
    return movies.length > 0 ? Math.max(...movies.map(c => c.id || 0)) + 1 : 0;
  }
  // constructor() { }
}
  
