import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  title: string;
  group: string;


  constructor() { 
    this.title = 'First Post';
  }

  ngOnInit(): void {
  }

}
