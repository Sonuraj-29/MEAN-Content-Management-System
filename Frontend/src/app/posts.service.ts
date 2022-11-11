import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http : HttpClient) { }

  getPosts(category:any){
    return this.http.get('http://localhost:3000/posts/'+category)
    }

  getAllPosts(){
    return this.http.get('http://localhost:3000/posts')
  }

  getMyPosts(category:any){
    let user = localStorage.getItem('email')
    return this.http.get('http://localhost:3000/posts/'+ category + '/' + user)
    }

  getAllMyPosts(){
    let user = localStorage.getItem('email')
    return this.http.get('http://localhost:3000/posts/all/' + user)
    }
  }
