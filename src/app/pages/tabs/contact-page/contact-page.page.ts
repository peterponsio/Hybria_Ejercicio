import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { IonInput, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.page.html',
  styleUrls: ['./contact-page.page.scss'],
})
export class ContactPagePage implements OnInit {

  constructor(private formBuilder:FormBuilder, private toastController: ToastController) { }

  changeBottomBorderMail: boolean = false;
  changeBottomBorderTitle: boolean = false;
  changeBottomBorderMensaje : boolean = false;

  @ViewChild(IonInput) inputs: IonInput;

  ngOnInit() {
  }

  contactForm: FormGroup = this.formBuilder.group({
    email: ['',[Validators.required,Validators.min(1),Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
    title: ['',[Validators.required,Validators.minLength(5)]],
    mensaje: ['',[Validators.required,Validators.minLength(10)]],
    });

  
  onClickContact(){

  }

  onHoverInput(event : any){
    console.log(event.target.id);
    switch( event.target.id) {
      case "mail":
        this.changeBottomBorderMail = !this.changeBottomBorderMail;
      break;
      case "title":
        this.changeBottomBorderTitle = !this.changeBottomBorderTitle;
      break;
      case "mensaje":
        this.changeBottomBorderMensaje = !this.changeBottomBorderMensaje;
      break;
    } 
  }

  onSubmit(){
    console.log(this.contactForm.valid + "\n " + this.contactForm.getRawValue().email);
      this.contactForm.valid ?  this.presentToast("Enviado") : this.presentToast("Rellene los campos"); 
  }
  async presentToast(text: string) {
    const toast = await this.toastController.create({
      message: text,
      duration: 2000
    });
    toast.present();
  }

 

  
}
