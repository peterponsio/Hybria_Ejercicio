import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-section-page',
  templateUrl: './section-page.page.html',
  styleUrls: ['./section-page.page.scss'],
})
export class SectionPagePage implements OnInit {

  constructor(private alertController: AlertController,private router:Router,private data:DataServiceService,private nav:NavController) { }

  isPremiun: any;
  listAccesories: any[] = [];

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.data.getAccesories().subscribe((res)=>{
      this.listAccesories = res;
    })
  } 

  segmentChanged( event : any ){
    event.detail.value == "premiun" ? this.isPremiun = true : this.isPremiun = false;
  
  }

  onClickOpenDetail(item){

    this.nav.navigateForward(['detail-page'], { state: { dataDetail: item } })

   // this.router.navigate(['detail-page'], { state: { dataDetail: item } });
  }

  onClickSeeAdvantage(){
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Ventajas',
      
      message: 'Estas son las ventajas premiun',
      buttons: ['Cerrar']
    });
  
    await alert.present();
  }

}
