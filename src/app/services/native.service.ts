import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

// import { YoutubeVideoPlayer } from '@awesome-cordova-plugins/youtube-video-player/ngx';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { ImagePicker, ImagePickerOptions } from '@awesome-cordova-plugins/image-picker/ngx';
import { LoadingController } from '@ionic/angular';



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
  constructor(private cam:Camera,private imgP: ImagePicker,private loadingController: LoadingController) { }

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
       console.log();
       
      });
 
   };

   optionsPicker = {
    // Android only. Max images to be selected, defaults to 15. If this is set to 1, upon
    // selection of a single image, the plugin will return it.
    maximumImagesCount: 1,

    // max width and height to allow the images to be.  Will keep aspect
    // ratio no matter what.  So if both are 800, the returned image
    // will be at most 800 pixels wide and 800 pixels tall.  If the width is
    // 800 and height 0 the image will be 800 pixels wide if the source
    // is at least that wide.
    width: 300,
    height: 300,

    // quality of resized image, defaults to 100
    quality: 100,

    // output type, defaults to FILE_URIs.
    // available options are
    // window.imagePicker.OutputType.FILE_URI (0) or
    // window.imagePicker.OutputType.BASE64_STRING (1)
    outputType: 1,
  };
 
    getImageGallery(){
      console.log("hola d");
      
      this.imgP.getPictures(this.optionsPicker).then( async (results) => {
        let base64Image = "data:image/jpeg;base64," + results;
        return base64Image;
      }, (err) => { });

    }

    async presentLoading() {
      const loading = await this.loadingController.create({
        spinner: 'bubbles',
        translucent: true,
      });
      await loading.present();
    }
 
}
