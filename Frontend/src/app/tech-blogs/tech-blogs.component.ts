import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-tech-blogs',
  templateUrl: './tech-blogs.component.html',
  styleUrls: ['./tech-blogs.component.css']
})
export class TechBlogsComponent implements OnInit {

  posts : [] = []

  constructor(private postsService : PostsService ) { }

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts(){
    this.postsService.getPosts('Technology').subscribe((posts)=>{
      console.log(posts)
      
    })
  }
}
