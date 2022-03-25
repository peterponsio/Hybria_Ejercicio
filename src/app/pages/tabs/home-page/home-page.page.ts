import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { NativeService } from 'src/app/services/native.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {

  constructor(private native:NativeService,private sanitizer: DomSanitizer) { }

  vid: SafeUrl;

  urlVid: string = "https://www.youtube.com/watch?v=NiLD0kPcM94";


  ngOnInit() {
    this.includeVideo();
  }


  onClickSeeThisCarData(){
    console.log("ddd");
  }

  onClickOpenVideo(){
   
  }

   includeVideo() {

    console.log("include video")
     if (this.hasUrlYoutube(this.urlVid)) {
      
       this.vid = this.getYoutubeUrlEmbedFromUrl(this.urlVid);

     }
   }

  hasUrlYoutube(text) {
    const urlRegex = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/;
    return urlRegex.test(text);
  }

  getYoutubeUrlEmbedFromUrl(url: string): SafeResourceUrl {
   // const id = this.getYoutubeIdFromUrl(url);
    const i = this.getYoutubeIdFromUrl(url);
    this.vid = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${i}`);
    return this.vid;
  }

getYoutubeIdFromUrl(url: string): string {
    const urlRegex = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((?:\w|-){11})/;
    console.log(url.split(urlRegex)[1]);
    return url.split(urlRegex)[1];
  }

}
