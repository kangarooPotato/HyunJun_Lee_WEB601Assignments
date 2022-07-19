import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { FilterMovieTypePipe } from './filter-movie-type.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentCardComponent,
    FilterMovieTypePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
