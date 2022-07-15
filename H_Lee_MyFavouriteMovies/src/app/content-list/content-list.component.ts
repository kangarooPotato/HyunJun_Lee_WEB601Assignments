import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {



  favouriteMovieList: Content[] = [];

  constructor(private movieService: MovieService) {

  }

  ngOnInit(): void {
    //this.content = this.movieService.getContent();
    this.movieService.getContent().subscribe(favouriteMovieList => this.favouriteMovieList = favouriteMovieList);
  }
}
