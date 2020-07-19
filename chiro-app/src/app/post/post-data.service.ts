import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { POSTS } from './mock-posts';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostDataService {
  constructor(private http: HttpClient) { }

  get posts$(): Observable<Post[]> {
    return this.http.get(`${environment.apiUrl}/posts/`).pipe(
      tap(console.log),
      map(
        (list:any[]): Post[]=> list.map(Post.fromJSON)
      )
    );
  }

  addNewPost(post: Post){
    this._posts.push(post);
  }
}
