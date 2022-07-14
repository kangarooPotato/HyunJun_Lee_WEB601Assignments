import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  favouriteMovieList: Content[];


  constructor(private MovieService: MovieService) {
    this.favouriteMovieList = [];
  }

  ngOnInit(): void {

    this.MovieService.getContent().subscribe(moviesArray =>
      this.favouriteMovieList = moviesArray);

  }

}