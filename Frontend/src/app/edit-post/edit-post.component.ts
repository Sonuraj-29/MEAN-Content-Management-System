import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  categories : any[] = []

  postData = {
    Title : '',
    Author : '',
    Content : '',
    Category : '',
    UserId : '',
    Date : ''
  }

  constructor(private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.getCategory()

    let postId = localStorage.getItem('editPostId')
    this.http.get('http://localhost:3000/posts/edit/' + postId).subscribe((post:any)=>{
      this.postData = JSON.parse(JSON.stringify(post[0]))
    })
  }

  getCategory(){
    this.http.get('http://localhost:3000/categories').subscribe((categories)=>{
      this.categories = JSON.parse(JSON.stringify(categories))
    })
  }

  updatePost(){
    this.http.put('http://localhost:3000/posts', this.postData).subscribe(()=>{
      alert('Post updated')
      this.router.navigateByUrl('myposts')
    })
  }

}
