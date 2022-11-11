import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {

  categories : any[] = []
  posts : any[] = []


  constructor(private http : HttpClient, private postsService : PostsService) { }

  ngOnInit(): void {
    this.getCategory()
    this.getAllMyPosts()
  }

  getCategory(){
    this.http.get('http://localhost:3000/categories').subscribe((categories)=>{
      this.categories = JSON.parse(JSON.stringify(categories))

    })
  }

  getAllMyPosts(){
    this.postsService.getAllMyPosts().subscribe((posts)=>{
      this.posts = JSON.parse(JSON.stringify(posts))
    })
  }

  getMyPosts(category:any){
    this.postsService.getMyPosts(category.Name).subscribe((posts)=>{
      this.posts = JSON.parse(JSON.stringify(posts))
 })
  }

}