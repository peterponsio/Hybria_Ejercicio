import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }

  onClickSingUp(){
    console.log("click");
    this.navCtrl.navigateForward("sing-up");
  }

  onClickLogin(){
    this.navCtrl.navigateForward("login");
  }

}
