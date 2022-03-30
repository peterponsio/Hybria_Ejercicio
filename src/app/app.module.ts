import { MbscModule } from '@mobiscroll/angular';
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
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';
import { ImagePicker } from '@awesome-cordova-plugins/image-picker/ngx';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Keyboard } from '@awesome-cordova-plugins/keyboard/ngx';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeDataService } from './services/fakeData';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [ 
    MbscModule,  
    BrowserModule, 
    IonicModule.forRoot(),
     AppRoutingModule,
     ReactiveFormsModule,
     IonicStorageModule.forRoot(),
     HttpClientModule,
     HttpClientInMemoryWebApiModule.forRoot(FakeDataService),
    
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
     Camera,
     IonicStorageModule,
     SocialSharing,
     Keyboard,
     CallNumber,
     EmailComposer,
     ImagePicker,
  //  YoutubeVideoPlayer
  ],
  exports: [
   
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
