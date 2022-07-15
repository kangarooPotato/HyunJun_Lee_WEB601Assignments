import { Component } from '@angular/core';
import { DEFAULTMOVIECONTENT } from './data/mock-MOVIE';
import { Content } from "./models/content";
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'H_Lee_MyFavouriteMovies';

  favouriteMovieList: Content[] = [];

  individualMovie: Content = DEFAULTMOVIECONTENT;

  constructor(private movieService: MovieService) {

  }

  ngOnInit(): void {
    //this.favouriteMovieList = this.movieService.getContent();
    //this.movieService.getContent().subscribe(favouriteMovieList => this.favouriteMovieList = favouriteMovieList);
    
    // getContentItem 테스트용 코드임 제발 생각좀 하자
      this.movieService.getContentItem(0).subscribe(MoviesSingleItem => {
        console.log("앱 컴포넌트에서 이 콘텐츠 아이템 찾음: ", MoviesSingleItem);
        this.individualMovie = MoviesSingleItem;
      });
  }

  // 이거 왜 밖에다 둠????
  checkForIdInList(idValue: string): void {
    this.movieService.getContentItem(Number(idValue)).subscribe(moviesSingleItem => {
      console.log("앱 컴포넌트에서 콘텐츠 아이템 다시 찾음 (검색): ", moviesSingleItem);
      this.individualMovie = moviesSingleItem;
    });
  }

}
