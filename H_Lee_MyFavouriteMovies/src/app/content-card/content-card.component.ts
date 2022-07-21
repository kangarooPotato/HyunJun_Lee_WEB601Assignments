import { Component, OnInit, Input } from '@angular/core';
import { Content } from '../models/content';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  @Input() movieCard?: Content;
  @Input() isLast?: boolean;


  clickEvent() {
    console.log(this.movieCard?.id, this.movieCard?.author);
 };

  constructor() {
}
  ngOnInit(): void {
  }

}
