import { MbscModule } from '@mobiscroll/angular';
import { ModalAddCarComponent } from './modal-add-car/modal-add-car.component';
import { CardMyCardComponent } from './card-my-card/card-my-card.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { CardSlideComponent } from './card-slide/card-slide.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderMenuComponent,
    CardSlideComponent,
    CardMyCardComponent,
    ModalAddCarComponent
  ],
  imports: [ 
    MbscModule, 
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderMenuComponent,
    CardSlideComponent,
    CardMyCardComponent,
    ModalAddCarComponent
  ]
})
export class ComponentsModule { }
