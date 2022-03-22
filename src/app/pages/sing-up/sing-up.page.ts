
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { NativeService } from 'src/app/services/native.service';


@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.page.html',
  styleUrls: ['./sing-up.page.scss'],
})
export class SingUpPage implements OnInit {

  photos: any[] = [];

  constructor(private nav: NavController,private nativeService: NativeService) { }

  ngOnInit() {
  }

  onClickBackButton(){
    this.nav.navigateBack("login");
  }


  onClicCreateAcc(){
    this.nav.navigateBack("tabs/home-page");
  }


  addProfilePic(){
 
  try {
      this.nativeService.getProfilePic().then(res=>{
      console.log(res);
      this.photos = [res,...this.photos]
    });
  } catch(error) {
    console.log(error);
  }

  }

  onCLickHaveAcc(){
    this.nav.navigateBack("login");
  }

  

}
