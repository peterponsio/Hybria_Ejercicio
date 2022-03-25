
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { Component, NgZone, OnInit } from '@angular/core';

import { Keyboard } from '@awesome-cordova-plugins/keyboard/ngx';




@Component({
  selector: 'app-pass-recovery-v2',
  templateUrl: './pass-recovery-v2.page.html',
  styleUrls: ['./pass-recovery-v2.page.scss'],
})
export class PassRecoveryV2Page implements OnInit {

  seePass: string = "password";
  seePassRepeat: string = "password";

  showBtn: boolean = true;

  constructor(private navCtrl:NavController, private alertController: AlertController,private formBuilder:FormBuilder,private toastController: ToastController,private keyb:Keyboard,private zg: NgZone) {

    
    this.keyb.onKeyboardDidShow().subscribe((res)=>{
      this.showBtn = false;

      this.zg.run(() => {
        this.showBtn=false;
      
      });

    });

    this.keyb.onKeyboardDidHide().subscribe((res)=>{
  
      this.zg.run(() => {
        this.showBtn=true;
      
      });


    })

    


   }

  ngOnInit() {

  }

  recoveryForm: FormGroup = this.formBuilder.group({
    email: ['',[Validators.required,Validators.min(1),Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
    password: ['',[Validators.required, Validators.minLength(8),Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$")]],
    repeatPassword : ['',[Validators.required, Validators.minLength(8),Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$")]],
    });

  async onClickSendDataToResetPass(){

    const alert = await this.alertController.create({
      cssClass: 'custom_alert',
      mode: "ios",
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

  onClickHelp(){
    this.navCtrl.navigateBack("help");
  }

  onClickSeePass(){
   
    this.seePass == "password" ? this.seePass="text" : this.seePass="password";
    
  }

  onClickSeePassRepeat(){

    this.seePassRepeat == "password" ? this.seePassRepeat="text" : this.seePassRepeat="password";
  }


  onSubmit(){
    console.log(this.recoveryForm.valid + "\n " + this.recoveryForm.getRawValue().email);
      this.recoveryForm.valid ?  this.onClickSendDataToResetPass() : this.presentToast("Rellene los campos"); 
  }

  async presentToast(text: string) {
    const toast = await this.toastController.create({
      message: text,
      duration: 2000
    });
    toast.present();
  }

  

}
