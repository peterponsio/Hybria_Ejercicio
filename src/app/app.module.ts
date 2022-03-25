
import { IonicStorageModule } from '@ionic/storage-angular'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

 import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
//  import { YoutubeVideoPlayer } from '@awesome-cordova-plugins/youtube-video-player/ngx';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Keyboard } from '@awesome-cordova-plugins/keyboard/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),
     AppRoutingModule,
     ReactiveFormsModule,
     IonicStorageModule.forRoot(),
 
  
     
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
     Camera,
     IonicStorageModule,
     SocialSharing,
     Keyboard
  //  YoutubeVideoPlayer
  ],
  exports: [
   
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
