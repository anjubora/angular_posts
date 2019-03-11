import { Component, OnInit ,Input} from '@angular/core';
import {Post} from '../post.model'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  // posts=[
  // {title:'first-title',content:'this is my content'},
  // {title:'second-title',content:'this is my content'},
  // {title:'third-title',content:'this is my content'}


  // ]

  @Input() posts : Post[]=[];
   


  constructor() { }

  ngOnInit() {
  }

}
