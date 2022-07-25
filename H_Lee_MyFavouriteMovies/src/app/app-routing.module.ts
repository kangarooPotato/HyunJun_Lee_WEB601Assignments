import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { DetailedContentComponent } from './detailed-content/detailed-content.component';
import { ContentSearchComponent } from './content-search/content-search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddEditContentComponent } from './add-edit-content/add-edit-content.component';
import { StepperComponent } from './stepper/stepper.component';

const routes: Routes = [
  {
    path: "", // 이거 왜 삭제 안 하고 비어있음??? index 임?
    redirectTo: "/list", // 걍 /list로 보내버리는 뜻 같음, 꼭 앞에 / 붙어야함?
    pathMatch: "full",
  },
  {
    path: "list",
    component: ContentListComponent,
  },
  {
    path: "detail/:id", // :는 뭘 뜻함?
    component: DetailedContentComponent
  },
  {
    path: "search",
    component: ContentSearchComponent,
  },
  {
    path: "add",
    component: AddEditContentComponent
  },
  {
    path: "stepper",
    component: StepperComponent  
  },
  {
    path: "updateContent/:id",
    component: AddEditContentComponent,
  },
  {
  path: "**",
    component: PageNotFoundComponent,
  }
];



@NgModule({
  declarations: [],

  // 이거 우리가 만든 라우트 가져오고 작동하게 만들어줌.. 근데 이게 뭔지?? 걍 항상 같은가?
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
