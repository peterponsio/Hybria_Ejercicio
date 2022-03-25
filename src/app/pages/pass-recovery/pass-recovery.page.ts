import { Keyboard } from '@awesome-cordova-plugins/keyboard/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-pass-recovery',
  templateUrl: './pass-recovery.page.html',
  styleUrls: ['./pass-recovery.page.scss'],
})
export class PassRecoveryPage implements OnInit {

  showBtn: boolean = true;


  constructor(private navCtrl: NavController,private formBuilder:FormBuilder, private toastController: ToastController,private keyb:Keyboard,private zg: NgZone) {

   }

   ionViewWillEnter() {
     
    this.keyb.onKeyboardWillShow().subscribe((res)=>{
  
      this.zg.run(() => {
        this.showBtn=false;
      
      });
    });

    this.keyb.onKeyboardWillHide().subscribe((res)=>{
  
      this.zg.run(() => {
        this.showBtn=true;
      
      });
    })
   }

  recoveryForm: FormGroup = this.formBuilder.group({
    email: ['',[Validators.required,Validators.min(1),Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
    });


  ngOnInit() {
  }

  onClickBackButton(){
    this.navCtrl.navigateBack("login");
  }

  onClickHelp(){
    this.navCtrl.navigateBack("help");
  }

  onSubmit(){
    console.log(this.recoveryForm.valid + "\n " + this.recoveryForm.getRawValue().email);
      this.recoveryForm.valid ?  this.navCtrl.navigateForward("pass-recovery-v2") : this.presentToast("Rellene los campos"); 
  }

  async presentToast(text: string) {
    const toast = await this.toastController.create({
      message: text,
      duration: 2000
    });
    toast.present();
  }

}
