import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoryComponent } from './blog/story/story.component';
import { BookComponent } from './book/book.component';

const routes: Routes = [
  {path:'', component:StoryComponent},
  {path:'book', component:BookComponent},
  //LAzy loading!! Learn this one line for lazy loading for module and Module inside two component
  {path:'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
