import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from '../book/book.component';

import { PuzzleComponent } from './puzzle/puzzle.component';
import { StoryComponent } from './story/story.component';

const routes: Routes = [
  {path:"", component:StoryComponent},
  {path:"puzzle", component:PuzzleComponent},
  {path:"story", component:StoryComponent},
  {path:"book", component:BookComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
