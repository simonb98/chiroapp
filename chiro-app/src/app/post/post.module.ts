import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment/comment.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { PostListComponent } from './post-list/post-list.component';
import { AddPostComponent } from './add-post/add-post.component';
import { PostFilterPipe } from './post-filter.pipe';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [PostComponent, CommentComponent, PostListComponent, AddPostComponent, PostFilterPipe],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule
  ],
  exports: [
    PostListComponent
  ]
})
export class PostModule { }
