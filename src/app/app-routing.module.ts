import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'signin'},
  {path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)},
  {path: 'video', loadChildren: () => import('./pages/video/video.module').then(m => m.VideoModule) },
  {path: 'playlists', loadChildren: () => import('./pages/playlists/playlists.module').then(m => m.PlaylistsModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

