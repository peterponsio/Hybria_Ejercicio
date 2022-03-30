import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { IonInput, ToastController } from '@ionic/angular';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.page.html',
  styleUrls: ['./contact-page.page.scss'],
})
export class ContactPagePage implements OnInit {

  constructor(private formBuilder:FormBuilder, private toastController: ToastController,private callNumber:CallNumber,private emailComposer:EmailComposer ) { }

  changeBottomBorderMail: boolean = false;
  changeBottomBorderTitle: boolean = false;
  changeBottomBorderMensaje : boolean = false;

  listApps: any[] = [];

  @ViewChild(IonInput) inputs: IonInput;

  ngOnInit() {
  }

  ionViewWillEnter() {

  
  }

  contactForm: FormGroup = this.formBuilder.group({
    email: ['',[Validators.required,Validators.minLength(6)]],
    title: ['',[Validators.required,Validators.minLength(5)]],
    mensaje: ['',[Validators.required,Validators.minLength(10)]],
    });

  
  onClickContact(){

  }

  onSubmit(){

    this.contactForm.valid ?  this.contactUser(this.contactForm.getRawValue().email) : this.presentToast("Rellene los campos"); 


  }
  async presentToast(text: string) {
    const toast = await this.toastController.create({
      message: text,
      duration: 2000
    });
    toast.present();
  }

  contactUser(email_tel:string){

    if(email_tel.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){


      this.emailComposer.isAvailable().then((available: boolean) => {
        if(available) {
         
          let email = {
            to: email_tel,
            // cc: '',
            // bcc: "",
            // attachments: [
            
            // ],
            subject: this.contactForm.getRawValue().title,
            body: this.contactForm.getRawValue().mensaje,
            isHtml: true
          };
          this.emailComposer.open(email);
          
        }else{
          this.presentToast("Algo salio mal")
        }
       });

  

    }else if (email_tel.match(/^[0-9]*$/)){

      this.callNumber.callNumber(email_tel, true).then(res =>
         console.log('Launched dialer!', res)).catch(
           err => console.log('Error launching dialer', err));

    }else{
      this.presentToast("debe ingresar un telefono/email valido")
    }
  } 
}
