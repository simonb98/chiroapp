import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { POSTS } from './mock-posts';

@Injectable({
  providedIn: 'root'
})
export class PostDataService {
  private _posts = POSTS;
  constructor() { }

  get posts(): Post[]{
    return this._posts;
  }

  addNewPost(post: Post){
    this._posts.push(post);
  }
}
