import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

// import { YoutubeVideoPlayer } from '@awesome-cordova-plugins/youtube-video-player/ngx';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';


declare var window;

var apiKey = environment.youtube_api_key;

@Injectable({
  providedIn: 'root'
})
export class NativeService {

  private cameraOptions: CameraOptions = {
    quality: 100,
    destinationType: this.cam.DestinationType.FILE_URI,
    encodingType: this.cam.EncodingType.JPEG,
    mediaType: this.cam.MediaType.PICTURE
  };


  constructor(private cam:Camera) { }

  imgFile:any;
 

  async getProfilePic(){
 
     return this.cam.getPicture(this.cameraOptions).then((imageData) => {
       // imageData is either a base64 encoded string or a file URI
       // If it's base64 (DATA_URL):
       let imageSrc: any;
      // let base64Image = 'data:image/jpeg;base64,' + imageData;
       imageSrc = window.Ionic.WebView.convertFileSrc(imageData)
       return imageSrc;
      }, (err) => {
       // Handle error
      });
 
   }
 
    playYTvideo(){
     ///AIzaSyAcJTuvyCJLAwGJFatBEvX6iwH2g8gu37c
 
    //  this.youtube.openVideo("BNVZmrxXuuU");

    

   }
 
}
