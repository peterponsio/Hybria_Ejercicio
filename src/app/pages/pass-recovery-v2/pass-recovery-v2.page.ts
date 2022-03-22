import { AlertController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pass-recovery-v2',
  templateUrl: './pass-recovery-v2.page.html',
  styleUrls: ['./pass-recovery-v2.page.scss'],
})
export class PassRecoveryV2Page implements OnInit {

  constructor(private navCtrl:NavController, private alertController: AlertController) { }

  ngOnInit() {
  }

  async onClickSendDataToResetPass(){

    const alert = await this.alertController.create({
      cssClass: 'custom_alert',
      header: 'Contraseña Restablecida', 
      message: 'Tu contraseña ha sido restablecida, ya pudes hacer login de nuevo.',
      buttons: [
        {
          text: "OK",
          id: "alertOKBtn",
          cssClass: "custom_alert_btn",
          handler: (res) =>{
            this.onClickBackButton();
          } 
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();

  }

  onClickBackButton(){
    this.navCtrl.navigateBack("login");
  }

  

}
