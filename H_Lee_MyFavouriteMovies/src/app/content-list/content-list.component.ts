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
  HJ: Content = {
    id: 100,
    title: 'LEE',
    body: "just a movie",
    author: "HJ.L",
    type: "King",
    hashtags: ["hash1", "hasg2"]
  }

  constructor(private MovieService: MovieService) {
    this.favouriteMovieList = [];
  }

  ngOnInit(): void {

    this.MovieService.getContent().subscribe(moviesArray =>
      this.favouriteMovieList = moviesArray);

      // 컨텐츠 추가 테스트 - 작동
      // this.MovieService.addContentItem(this.HJ).subscribe(moviesArray => {
      //   console.log("Added Jun: ", moviesArray);
      // });

      this.MovieService.updateContentItem(this.HJ).subscribe(moviesArray => {
        console.log("updated HJ: ", moviesArray);
      });

      // this.MovieService.getContentItem(1).subscribe(moviesSingleItem => {
      //   console.log("Got the content item: ",  moviesSingleItem);
      // });
  }

}