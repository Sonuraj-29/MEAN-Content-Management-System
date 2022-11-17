import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewPostComponent } from './new-post/new-post.component';
import { FormsModule } from '@angular/forms';
import { UserManagementComponent } from './user-management/user-management.component';
import { CategoriesComponent } from './categories/categories.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { EditPostComponent } from './edit-post/edit-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    WelcomeComponent,
    HomeComponent,
    LoginComponent,
    NewPostComponent,
    UserManagementComponent,
    CategoriesComponent,
    MyPostsComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }