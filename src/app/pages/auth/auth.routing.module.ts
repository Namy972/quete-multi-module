import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'signin'},
  {path: 'signin', component: SigninComponent}, ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
