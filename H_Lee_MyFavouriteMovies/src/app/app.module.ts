import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { DefaultTypePipe } from './default-type.pipe';
import { DetailedContentComponent } from './detailed-content/detailed-content.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContentSearchComponent } from './content-search/content-search.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentCardComponent,
    DefaultTypePipe,
    DetailedContentComponent,
    PageNotFoundComponent,
    ContentSearchComponent,
    TopNavigationComponent,
    TopNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    //app-routing.module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
