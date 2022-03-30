import { ModalController, ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-add-car',
  templateUrl: './modal-add-car.component.html',
  styleUrls: ['./modal-add-car.component.scss'],
})
export class ModalAddCarComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private  modalController: ModalController,private  toastController: ToastController) { }

  knobValues: any = 10;

  addCar: FormGroup = this.formBuilder.group({
    model: ['',[Validators.required, Validators.minLength(3)]],
    price: [''],
    description: ['',[Validators.required, Validators.minLength(6)]],
    km: [''],
    img: ['']
    });


  ngOnInit() {}

  onClickAddCar(){

    this.addCar.getRawValue().img.match("/(https?:\/\/.*\.(?:png|jpg))/i") ? console.log("entra") : this.addCar.controls['img'].setValue("../../../assets/carPlaceHolder.png");
    
    this.addCar.valid ? this.modalController.dismiss(this.addCar.getRawValue()) : this.presentToast("rellene los campos");
  }

  onClickDismissModal(){
    this.modalController.dismiss();
  }

  async presentToast(text:string) {
    const toast = await this.toastController.create({
      message: text,
      duration: 2000
    });
    toast.present();
  }


}
