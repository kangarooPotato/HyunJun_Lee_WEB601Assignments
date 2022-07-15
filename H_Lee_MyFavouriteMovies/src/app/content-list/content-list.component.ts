import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {


  hyun: Content = {
    id: 0,
    title: "Hyun",
    body: "Good Developer / update test",
    author: "empty"
  }

  jun: Content = {
    id: 10,
    title: "Jun",
    body: "bad Developer / add test",
    author: "author is.. I don't know"
  }




  favouriteMovieList: Content[] = [];

  constructor(private movieService: MovieService) {

  }

  ngOnInit(): void {
    //this.content = this.movieService.getContent();

    // 콘텐츠 아이템 가져오기 (getContentItem)
    this.movieService.getContent().subscribe(favouriteMovieArray => this.favouriteMovieList = favouriteMovieArray);

    // 콘텐츠 아이템 하나 가져오기 test / 작동함
    this.movieService.getContentItem(-1).subscribe(moviesSingleItem => {
      console.log("콘텐츠 아이템 하나 가져오기 (디폴트값 -1짜리): ", moviesSingleItem);
    });

    // 콘텐츠 업데이트 (contentUpdate)
    this.movieService.updateContentItem(this.jun).subscribe(moviesArray => {
      console.log("updated hyun: ", moviesArray);
    });

    // 콘텐츠 추가 (addContent)
    this.movieService.inputContentItem(this.jun).subscribe(moviesArray => {
      console.log("added jun: ", moviesArray);
    });
  }
}
