import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';
import { MovieService } from '../services/movie.service';
import { MOVIES } from '../data/mock-MOVIE';

@Component({
  selector: 'app-add-edit-content',
  templateUrl: './add-edit-content.component.html',
  styleUrls: ['./add-edit-content.component.scss']
})
export class AddEditContentComponent implements OnInit {

  getLength(i: number) {
    // setting it to the value of our array of content
    // 데이터 베이스 만드는듯
    // 그리고 그 어레이 오브 데이터(content)를 리턴해줌
    const movies: Content[] = MOVIES;

    console.log(MOVIES.length + 1);

    return MOVIES.length + i;
  }

  newContent: Content;
  
  constructor(private movieService: MovieService, private route: ActivatedRoute) {
    
    this.newContent = {
      title: '',
      author: ''
    };
  }

  ngOnInit(): void {

  //   this.route.paramMap.subscribe((params) => {
  //     this.id = Number(params.get("id") ?? 0);

  //     this.movieService.getContentItem(this.id).subscribe((movieCard) => {
  //       this.movieCard = movieCard;
  //     });
  // });

    this.route.paramMap.subscribe((params) => {
      let id = Number(params.get("id") ?? this.getLength(1));
      
      this.newContent.id = id;
      if (this.newContent.id !== -1) {
        this.movieService.getContentItem(this.newContent.id)
          .subscribe((movieToBeUpdated) => {
            this.newContent = movieToBeUpdated;
          });
      }
    });
  }

  addContent(): void {
    console.log("New content I sent the server: ", this.newContent);
    this.movieService.inputContentItem(this.newContent).subscribe(newItem => {
      this.newContent = {
        title: '',
        author: '',
        type:'',
      }
      console.log("The content the server gave me back: ", newItem);
    })
  }

  updateContent(): void {
    console.log("Content before I sent the server: ", this.newContent);
    this.movieService.updateContentItem(this.newContent).subscribe(() => {
      this.newContent = {
        // id: this.newContent.id,
        title: '',
        author: ''
      }
      console.log("The server updated the content");
    })
  }


}
