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
  movie3: any;
  movie4: any;



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
      title: "The Godfather",
      body: "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
      author: "Francis Ford Coppola",
      imageLink: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      type: "Crime",
      hashtags: ["Marlon Brando","Al Pacino", "James Caan"]
    };

    this.movie3 = {
      id: 2,
      title: "The Dark Knight",
      body: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      author: "Christopher Nolan",
      imageLink: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      type: "Action",
      hashtags: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"]
    };

    this.movie4 = {
      id: 3,
      title: "Inception",
      body: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      author: "Christopher Nolan",
      imageLink: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX700_.jpg",
      type: "Sci-Fi",
      hashtags: ["Leonardo DiCaprio","Joseph Gordon","LevittElliot Page"]
    };

  }
}
