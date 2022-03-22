import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pass-recovery',
  templateUrl: './pass-recovery.page.html',
  styleUrls: ['./pass-recovery.page.scss'],
})
export class PassRecoveryPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  onClickBackButton(){
    this.navCtrl.navigateBack("login");
  }

  onClickSendRecoveryMail(){
    this.navCtrl.navigateForward("pass-recovery-v2");
  }

}
