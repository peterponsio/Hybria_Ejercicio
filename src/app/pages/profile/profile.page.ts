import { ModalAddCarComponent } from './../../components/modal-add-car/modal-add-car.component';
import { ModalController, NavController } from '@ionic/angular';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { NativeService } from 'src/app/services/native.service';
import { NavigationEnd, Router } from '@angular/router';

import { filter, pairwise } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  userFavs: any[] = [];
  garage: any[] = [];
  users: any;
  profileList:boolean = true;

  userName: any = "";
  userMail:any = "";

  previousPage: any;

  editMode: boolean = true;

  constructor(private nav:NavController,private data:DataServiceService,private modalController: ModalController,private nat:NativeService,private ref: ChangeDetectorRef,private router:Router,private formBuilder:FormBuilder) {


    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd) => {
      console.log('prev:', event.urlAfterRedirects);
      this.previousPage = event.url;
    })

   }
  ngOnInit() {
    
  } 
  async addCar(){

      const modal = await this.modalController.create({
      component: ModalAddCarComponent,
      cssClass: "modalAdd",
      backdropDismiss: true,
      showBackdrop: true,
      });
    
      await modal.present();
      const { data } = await modal.onWillDismiss();
      console.log(data);
    
    this.data.addCar(data).subscribe(res=>{
      res != null ? this.garage = [...this.garage,res] : this.garage;
    });
  }

  ionViewWillEnter() {
    this.data.getFavList().subscribe((res)=>{
     // console.log(res);
      this.userFavs = res;
    });

    this.data.getGarage().subscribe((res)=>{
      this.garage = res;
    });

    this.data.getUsers().subscribe((res)=>{
      this.users = res;
      this.userName = this.users[0].name;
      this.userMail = this.users[0].email;
      this.editUser.controls['username'].setValue(this.userName);
      this.editUser.controls['usermail'].setValue(this.userMail);

    })
  }

   
  editUser = this.formBuilder.group({
    username: [''+this.userName,[Validators.required, Validators.minLength(3)]],
    usermail: [this.userMail,[Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
   
    });


  onClickCloseSesion(){
    this.router.navigateByUrl('/profile', { skipLocationChange: true }).then(() => {
      this.router.navigateByUrl("tabs/home-page");
  }); 
  }

  onClickEditProfile(){
      this.editMode = !this.editMode;
        
  }

  onClickEditPhoto(){
    this.nat.getImageGallery();
  }

}
