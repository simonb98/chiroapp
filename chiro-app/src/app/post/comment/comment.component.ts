import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  author: string;
  @Input() content : string;
  date : Date;

  constructor() { 
    this.date = new Date();
    this.author = 'Simon Baeyens';
  }

  ngOnInit(): void {
  }

}
