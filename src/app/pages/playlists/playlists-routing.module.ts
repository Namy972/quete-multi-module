import { PlaylistDetailsComponent } from './playlist-details/playlist-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaylistsComponent } from './playlists.component';

const routes: Routes = [
  { path: '', component: PlaylistsComponent },
  { path: 'details', component: PlaylistDetailsComponent },
  { path: 'create', component: PlaylistDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistsRoutingModule { }
