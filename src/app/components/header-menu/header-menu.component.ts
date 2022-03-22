import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
})
export class HeaderMenuComponent implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {}


  onClickCloseSesion(){
    this.navCtrl.navigateRoot("intro");
  }

}
