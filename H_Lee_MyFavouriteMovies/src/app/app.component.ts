import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'H_Lee_MyFavouriteMovies';

  movie1: any;
  movie2: any;

  constructor() {
    this.movie1 = {
      id: 0,
      title: "The Shawshank Redemption",
      body: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      author: "Frank Darabont",
      imageLink: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX674_.jpg",
      type: "Drama",
      hashtags: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"]
    };

    this.movie2 = {
      id: 1,
      title: "title text2",
      body: "body text2",
      author: "author text2",
      imageLink: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX674_.jpg",
      type: "type text2",
      hashtags: ["hashthag11","hash22", "hash33"]
    };

  }
}
