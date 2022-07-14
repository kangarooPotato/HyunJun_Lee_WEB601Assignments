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

  oneMovie: Content = DEFAULTMOVIECONTENT;


  constructor (private MovieService: MovieService) {
  }
  ngOnInit(): void {
    // getContentItem test
    this.MovieService.getContentItem(1).subscribe(moviesSingleItem => {
      console.log("App component - Got the content item: ", moviesSingleItem);

      this.oneMovie = moviesSingleItem;

    });

  }
}
