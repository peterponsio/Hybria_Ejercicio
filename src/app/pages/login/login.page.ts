import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  onClickBackButton(){
    this.navCtrl.navigateBack("intro");
  }

  onClickLogin(){
    this.navCtrl.navigateForward("tabs/home-page");
  }

  onClickDontHaveAcc(){
    this.navCtrl.navigateForward("sing-up");
  }

  onClickRecoverAcc(){
    this.navCtrl.navigateForward("pass-recovery");
  }

}
