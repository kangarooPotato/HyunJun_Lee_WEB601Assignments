import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { MOVIES } from '../data/mock-MOVIE';
import { Content } from '../models/content';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getContent(): Observable<Content[]>{
    return of (MOVIES);
  }
}
