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

  content: Content[] = [];

  constructor(private movieService: MovieService) {

  }

  ngOnInit(): void {
    //this.content = this.movieService.getContent();
    this.movieService.getContent().subscribe(content => this.content = content);
  }
}
