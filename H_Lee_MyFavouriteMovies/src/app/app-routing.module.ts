import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { ContentListComponent } from './content-list/content-list.component';
import { DetailedContentComponent } from './detailed-content/detailed-content.component';
import { ContentSearchComponent } from './content-search/content-search.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/list",
    pathMatch: "full",
  },
  {
    path: "list",
    component: ContentListComponent,
  },
  {
    path: "detail/:id",
    component: DetailedContentComponent
  },
  {
    path: "search",
    component: ContentSearchComponent,
  }
];



@NgModule({
  declarations: [],

  // 이거 우리가 만든 라우트 가져오고 작동하게 만들어줌
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
