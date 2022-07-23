import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Content } from '../models/content';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-detailed-content',
  templateUrl: './detailed-content.component.html',
  styleUrls: ['./detailed-content.component.scss']
})
export class DetailedContentComponent implements OnInit {

  id?: number;
  movieCard?: Content;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private movieService: MovieService,)
  {

  }

  ngOnInit(): void {


    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get("id") ?? 0);

      this.movieService.getContentItem(this.id).subscribe((movieCard) => {
        this.movieCard = movieCard;
      });
  });

    // this.id = Number(this.route.snapshot.paramMap.get('id'));

    // this.movieService.getContentItem(this.id).subscribe((c) => {
    //   this.movieDetail = c;
    // });

    // this.movieService.getContentItem(this.id).subscribe(singleMovie => {
    //   if (singleMovie) {
    //     this.movieDetail = singleMovie;
    //   } else {
    //     this.router.navigate(['/contentNotFound'])
    //   }
    // });
  }
}