import { Component, Input, OnInit } from '@angular/core';
import { Content } from "../models/content";

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  @Input() favouriteMovie?: Content;

  constructor() { }

  ngOnInit(): void {
    if (this.favouriteMovie) {
      console.log("value of favourite movie: ", this.favouriteMovie.title);
    }
  }

  hi(): void{
    console.log("Asd");
  }

  displayAuthorAndId(): void {
    console.log("Directed by: ", this.favouriteMovie?.author, ", Movies ID: ", this.favouriteMovie?.id);
  }

}
