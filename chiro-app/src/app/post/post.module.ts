import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { PostListComponent } from './post-list/post-list.component';


@NgModule({
  declarations: [PostComponent, CommentComponent, PostListComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    PostListComponent
  ]
})
export class PostModule { }
