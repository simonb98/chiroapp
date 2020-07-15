import { POSTS } from '../mock-posts';
import { Component } from '@angular/core';

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

}
