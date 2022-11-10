import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewPostComponent } from './new-post/new-post.component';
import { RegisterComponent } from './register/register.component';
import { TechBlogsComponent } from './tech-blogs/tech-blogs.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path : '', component : WelcomeComponent},
  { path : 'register', component : RegisterComponent},
  { path : 'login', component : LoginComponent},
  { path : 'newpost', component : NewPostComponent},
  { path : 'home', component : HomeComponent, children : [{ path : 'Technology', component : TechBlogsComponent}]},
  { path : 'usermanage', component : UserManagementComponent},
  { path : 'categories', component : CategoriesComponent},
  { path : 'category', component : AddCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
