import { POSTS } from '../mock-posts';
import { Component } from '@angular/core';
import { Post } from '../post.model';
import { PostDataService } from '../post-data.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent{

  constructor(private _postDataService: PostDataService) { }
  public filterPostGroup: string;

  applyFilter(filter:string){
    this.filterPostGroup = filter;
  }

  ngOnInit(): void {
  }

  get posts() {
    return this._postDataService.posts;
  }

  addNewPost(post: Post){
    this._postDataService.addNewPost(post);
  }

}
