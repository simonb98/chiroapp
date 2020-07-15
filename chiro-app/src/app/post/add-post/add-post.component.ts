import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  @Output() public newPost = new EventEmitter<Post>();

  constructor() { }

  ngOnInit(): void {
  }

  addPost(postTitle: HTMLInputElement, postContent: HTMLInputElement): boolean {
    const post = new Post("", postTitle.value, "", postContent.value, [], new Date());
    this.newPost.emit(post);
    console.log(postTitle.value, postContent.value);
    return false;
  }

}
