import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { DataStorageService } from 'src/app/services/data-storage.service';
import { ActionSheetButton, ActionSheetController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
})
export class HeaderMenuComponent implements OnInit {

  constructor(private navCtrl:NavController,private storage:DataStorageService,private socialSharing: SocialSharing,private actionSheetController:ActionSheetController) { }

  ngOnInit() {}

  

  onClickCloseSesion(){
    this.navCtrl.navigateRoot("intro");

    this.storage.removeUserData();
    
  }

 async onClickShare(){


    //array buttons

    const buttons: ActionSheetButton[] = [
      {
        text: "Compartir",
        icon: "share-outline",
        handler: () =>{
          this.onShareNew();
        }
      },
      {
        text: "Cancelar",
        icon: "close-outline",
        role: "Cancel",
        cssClass: "btnCancel"
      },
     ];


     const actionSh = await this.actionSheetController.create({
      header: "Opciones",
      mode: 'md',
      buttons: buttons,
      cssClass: "actionSheetTop"
    });

    await actionSh.present();
  }

  onShareNew(){

    this.socialSharing.share();
  }

  onClickProfile(){
    this.navCtrl.navigateForward("profile");
  }

}
