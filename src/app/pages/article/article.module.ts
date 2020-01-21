import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { DetailsArticlesComponent } from './details-articles/details-articles.component';
import { CreateArticlesComponent } from './create-articles/create-articles.component';



@NgModule({
  declarations: [ListArticlesComponent, DetailsArticlesComponent, CreateArticlesComponent],
  imports: [
    CommonModule
  ]
})
export class ArticleModule { }
