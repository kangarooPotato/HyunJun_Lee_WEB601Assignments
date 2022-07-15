import { Component } from '@angular/core';
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

  constructor() {

  }

  ngOnInit(): void {
    //this.favouriteMovieList = this.movieService.getContent();
    //this.movieService.getContent().subscribe(favouriteMovieList => this.favouriteMovieList = favouriteMovieList);
  }
}
