import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-add-edit-content',
  templateUrl: './add-edit-content.component.html',
  styleUrls: ['./add-edit-content.component.scss']
})
export class AddEditContentComponent implements OnInit {

  newContent: Content;
  
  constructor(private movieService: MovieService) {
    this.newContent = {
      title: '',
      author: ''
    };
  }

  ngOnInit(): void {
  }

  addContent(): void {
    console.log("New content I sent the server: ", this.newContent);
    this.movieService.inputContentItem(this.newContent).subscribe(newItem => {
      this.newContent = {
        title: '',
        author: ''
      }
      console.log("The content the server gave me back: ", newItem);
    })
  }


}
