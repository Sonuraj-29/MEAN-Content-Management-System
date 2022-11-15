import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories : any[] = []
  posts : any[] = []


  constructor(private http : HttpClient, private postsService : PostsService) { }

  ngOnInit(): void {
    this.getCategory()
    this.getAllPosts()
  }

  getCategory(){
    this.http.get('http://localhost:3000/categories').subscribe((categories)=>{
      this.categories = JSON.parse(JSON.stringify(categories))

    })
  }

  getAllPosts(){
    this.postsService.getAllPosts().subscribe((posts)=>{
      this.posts = JSON.parse(JSON.stringify(posts))

    })
  }

  getPosts(category:any){
    this.postsService.getPosts(category.Name).subscribe((posts)=>{
      this.posts = JSON.parse(JSON.stringify(posts))
 })
  }

}
