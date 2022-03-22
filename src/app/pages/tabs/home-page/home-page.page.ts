import { Component, OnInit } from '@angular/core';
import { NativeService } from 'src/app/services/native.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {

  constructor(private native:NativeService) { }

  ngOnInit() {
  }

  onClickSeeThisCarData(){
    console.log("ddd");
  }

  onClickOpenVideo(){
    this.native.playYTvideo();
  }

}
