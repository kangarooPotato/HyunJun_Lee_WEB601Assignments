import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  favouriteMovieList: Content[];

  constructor() {
    this.favouriteMovieList = [
      {
        id: 0,
        title: "The Shawshank Redemption",
        body: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        author: "Frank Darabont",
        imageLink: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX674_.jpg",
        type: "Drama",
        hashtags: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"]
      }, {
        id: 1,
        title: "The Godfather",
        body: "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
        author: "Francis Ford Coppola",
        imageLink: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        type: "Action",
        hashtags: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"]
      }, {
        id: 2,
        title: "The Dark Knight",
        //body: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        author: "Christopher Nolan",
        imageLink: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
        type: "Action",
        hashtags: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"]
      }, {
        id: 3,
        title: "Inception",
        //body: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        author: "Christopher Nolan",
        imageLink: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX700_.jpg",
        type: "Sci-Fi",
        //hashtags: ["Leonardo DiCaprio","Joseph Gordon","LevittElliot Page"]
      }, {
        id: 4,
        title: "Top Gun: Maverick",
        //body: "After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him.",
        author: "Joseph Kosinski",
        //imageLink: "https://m.media-amazon.com/images/M/MV5BMmIwZDMyYWUtNTU0ZS00ODJhLTg2ZmEtMTk5ZmYzODcxODYxXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UY720_.jpg",
        type: "Action",
        //hashtags: ["Tom Cruise","Jennifer Connelly","Miles Teller"]
      }
    ]
  }

  ngOnInit(): void {
  }

}