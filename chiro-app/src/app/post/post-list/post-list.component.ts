import { POSTS } from '../mock-posts';
import { Component } from '@angular/core';
import { Post } from '../post.model';
import { PostDataService } from '../post-data.service';
import { Subject, Observable } from 'rxjs';
import { distinctUntilChanged, debounceTime, map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent{

  public filterPostGroup: string;
  public filterPost$ = new Subject<string>();

  constructor(private _postDataService: PostDataService) {
    this.filterPost$
    .pipe(distinctUntilChanged(), debounceTime(400), map(val => val.toLowerCase()), filter(val => !val.startsWith('s')))
    .subscribe(val => this.filterPostGroup = val);
   }

  applyFilter(filter:string){
    this.filterPostGroup = filter;
  }

  ngOnInit(): void {
  }

  get posts$(): Observable<Post[]> {
    return this._postDataService.posts$;
  }

  addNewPost(post: Post){
    this._postDataService.addNewPost(post);
  }

}
