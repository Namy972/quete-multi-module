import { VideoModule } from './pages/video/video.module';
import { PlaylistsModule } from './pages/playlists/playlists.module';
import { AuthModule } from './pages/auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    VideoModule,
    PlaylistsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
