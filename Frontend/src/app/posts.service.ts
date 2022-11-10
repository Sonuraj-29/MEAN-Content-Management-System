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
  }
