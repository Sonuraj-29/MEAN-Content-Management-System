import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories : any[] = []
  
  constructor(private http: HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.listCategory()
  }

  listCategory(){
    this.http.get('http://localhost:3000/categories').subscribe((categories)=>{
      this.categories = JSON.parse(JSON.stringify(categories))
    })
  }

  addCategory(){
    var category = prompt('Enter new category')

    if(category != null){
      this.http.post('http://localhost:3000/categories',{ category : category }).subscribe((data:any)=>{
        var data = JSON.parse(JSON.stringify(data))
        if(data.status === 'fail'){
          alert(data.message)
        }
        else{
          alert(data.message)
          this.ngOnInit()
        }
      })
    }
  }

  removeCategory(category:any){
    this.http.delete('http://localhost:3000/categories/'+category._id).subscribe(()=>{
      this.ngOnInit()
    })
  }

}
