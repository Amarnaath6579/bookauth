import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { StoryComponent } from './story/story.component';
import { PuzzleComponent } from './puzzle/puzzle.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StoryComponent,
    PuzzleComponent,
    
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    ReactiveFormsModule
  ]
})
export class BlogModule { }
