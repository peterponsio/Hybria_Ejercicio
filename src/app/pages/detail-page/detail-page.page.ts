import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.page.html',
  styleUrls: ['./detail-page.page.scss'],
})
export class DetailPagePage implements OnInit {

  constructor(private router:Router,private nav: NavController) { }

  dataDetail: any;

  ngOnInit() {
    this.dataDetail = this.router.getCurrentNavigation().extras.state.dataDetail;
  }

  onClickBack(){
    this.nav.back();
  }
 
  


}
