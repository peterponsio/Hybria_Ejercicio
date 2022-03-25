import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  
  onClickBackButton(){
    this.navCtrl.navigateBack("pass-recovery");
  }

  onClickSendRecoveryMail(){
    this.navCtrl.navigateForward("pass-recovery-v2");
  }

  onClickHelp(){
    this.navCtrl.navigateBack("help");
  }

}
