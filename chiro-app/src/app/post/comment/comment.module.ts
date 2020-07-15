import { CommentComponent } from './comment/comment/comment.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCommentComponent } from './add-comment/add-comment.component';


@NgModule({
  declarations: [CommentComponent, AddCommentComponent],
  imports: [
    CommonModule
  ],
  exports: [

  ]
})
export class PostModule { }
