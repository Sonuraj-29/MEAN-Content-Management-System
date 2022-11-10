import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories : any[] = []

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.getCategory()
  }

  getCategory(){
    this.http.get('http://localhost:3000/categories').subscribe((categories)=>{
      this.categories = JSON.parse(JSON.stringify(categories))
    })
  }


}
