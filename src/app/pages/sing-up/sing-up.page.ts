import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

import { NavController, ToastController } from '@ionic/angular';
import { Component, OnInit, NgZone } from '@angular/core';
import { NativeService } from 'src/app/services/native.service';
import { Keyboard } from '@awesome-cordova-plugins/keyboard/ngx';


@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.page.html',
  styleUrls: ['./sing-up.page.scss'],
})
export class SingUpPage implements OnInit {

  photos: any[] = [];

  seePass: string = "password";
  seePassRepeat: string = "password";

  showBtn: boolean = true;


  constructor(private nav: NavController,private nativeService: NativeService,private formBuilder:FormBuilder,private toastController: ToastController,private keyb:Keyboard,private zg: NgZone) { }

  singForm: FormGroup = this.formBuilder.group({
    name: ['',[Validators.required, Validators.minLength(4)]],
    email: ['',[Validators.required,Validators.min(1),Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
    password: ['',[Validators.required, Validators.minLength(8),Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$")]],
    repeatPassword : ['',[Validators.required, Validators.minLength(8),Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$")]],
    });

  ngOnInit() {
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


  onClickBackButton(){
    this.nav.navigateBack("login");
  }


  onClicCreateAcc(){
    this.nav.navigateBack("tabs/home-page");
  }

  onCLickHaveAcc(){
    this.nav.navigateBack("login");
  }

  onClickSeePass(){
   
    this.seePass == "password" ? this.seePass="text" : this.seePass="password";
  }

  onClickSeePassRepeat(){

    this.seePassRepeat == "password" ? this.seePassRepeat="text" : this.seePassRepeat="password";
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

  onSubmit(){
    console.log(this.singForm.valid + "\n " + this.singForm.getRawValue().email);
      // this.singForm.valid ?  this.nav.navigateBack("tabs/home-page") : this.presentToast();

      this.nav.navigateBack("tabs/home-page")
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Complete los datos correctamenete.',
      duration: 2000
    });
    toast.present();
  }

}
