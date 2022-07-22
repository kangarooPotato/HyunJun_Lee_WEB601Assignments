import { Component, OnInit } from '@angular/core';
import { DEFAULTMOVIECONTENT } from '../data/mock-MOVIE';
import { Content } from '../models/content';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-content-search',
  templateUrl: './content-search.component.html',
  styleUrls: ['./content-search.component.scss']
})
export class ContentSearchComponent implements OnInit {

  individualMovie: Content = DEFAULTMOVIECONTENT;

  curruntItem = 1;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {


    // 기본값 세팅 창 열었을때 보여주는거
    this.movieService.getContentItem(this.curruntItem).subscribe(moviesSingleItem => {
      console.log("App component - Got the content item: ", moviesSingleItem);
      this.individualMovie = moviesSingleItem;
    });
  }

  //
  checkForIdInList(idValue: string): void {
    this.movieService.getContentItem(Number(idValue)).subscribe(moviesSingleItem => {
      console.log("App component - Got the content item AGAIN: ", moviesSingleItem);
      this.individualMovie = moviesSingleItem;
    });
  }

  

}
