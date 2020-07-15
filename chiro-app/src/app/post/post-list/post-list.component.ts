import { POSTS } from '../mock-posts';
import { Component } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent{
  private _posts = POSTS;

  constructor() { }

  ngOnInit(): void {
  }

  get posts() {
    return this._posts;
  }

  addNewPost(post: Post){
    this._posts.push(post);
  }

}
