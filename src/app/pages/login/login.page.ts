import { NavController } from '@ionic/angular';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { DataStorageService } from 'src/app/services/data-storage.service';


import { Storage } from '@ionic/storage-angular';
import { Keyboard } from '@awesome-cordova-plugins/keyboard/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  rememberUserValue: boolean = false;

  seePass: string = "password";

  showBtn: boolean = true;

  userList : any[] = [
    {
      username: "paco",
      password: "Paco12345@@"
    },
    {
      username: "juan",
      password: "juan1234"
    },
  ]

  constructor(private navCtrl: NavController,private formBuilder:FormBuilder,private storage:DataStorageService,private usersData:Storage,private keyb:Keyboard,private zg: NgZone) { }
 
  ionViewDidEnter() {
    
    this.usersData.get("userData").then(res=>{
      console.log(res);
      res != null ? this.navCtrl.navigateForward("tabs/home-page") : console.log("user dont exist");
    })    
  }


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

  loginForm: FormGroup = this.formBuilder.group({
    username: ['',[Validators.required, Validators.minLength(3)]],
    password: ['',[Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$")]],
    savedData: [true],
    });


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

  // rememberUser(event : any){
  //   this.rememberUserValue = !this.rememberUserValue;
  //   console.log(this.rememberUserValue);
  // }

  onClickSeePass(){
    console.log("seee");
    this.seePass == "password" ? this.seePass="text" : this.seePass="password";
  }


  onSubmit(){
   
    if(this.loginForm.valid){

      this.userExist(this.loginForm.getRawValue()) &&  this.loginForm.getRawValue().savedData ?  this.saveUserOnLogin() : console.log("user dont exist");

      this.userExist(this.loginForm.getRawValue()) ? this.navCtrl.navigateForward("tabs/home-page") : console.log("user dont exist");


      console.log(this.userExist(this.loginForm.getRawValue()));
      
    }else{
      console.log("fallo en los campos");
    }

  }

  saveUserOnLogin(){
    this.storage.saveUserData(this.loginForm.getRawValue()).then(res=>{
      this.navCtrl.navigateForward("tabs/home-page")
    })
  }

  userExist(userData : any){

   console.log(this.userList.find( data => data.username  === userData.username && data.password === userData.password.trim()));
    

   return !!this.userList.find( data => data.username  === userData.username && data.password === userData.password.trim());

  }

  cleanInputText(event: any){
    console.log(this.loginForm.getRawValue().username);
    this.loginForm.controls['username'].setValue(event.detail.value.trim());
  }

}
