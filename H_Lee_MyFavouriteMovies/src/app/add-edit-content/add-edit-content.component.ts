import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-add-edit-content',
  templateUrl: './add-edit-content.component.html',
  styleUrls: ['./add-edit-content.component.scss']
})
export class AddEditContentComponent implements OnInit {

  newContent: Content;
  
  constructor(private movieService: MovieService, private route: ActivatedRoute) {
    
    this.newContent = {
      title: '',
      author: ''
    };
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id = Number(params.get("id") ?? -1);
      
      this.newContent.id = id;

      if (this.newContent.id !== -1) {
        this.movieService.getContentItem(this.newContent.id)
          .subscribe((movieServiceToBeUpdated) => {
            this.newContent = movieServiceToBeUpdated;
          });
      }
    });
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

  updateContent(): void {
    console.log("Content before I sent the server: ", this.newContent);
    this.movieService.updateContentItem(this.newContent).subscribe(() => {
      this.newContent = {
        title: '',
        author: ''
      }
      console.log("The server updated the content");
    })
  }


}
