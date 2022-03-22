import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { CardSlideComponent } from './card-slide/card-slide.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    HeaderMenuComponent,
    CardSlideComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderMenuComponent,
    CardSlideComponent
  ]
})
export class ComponentsModule { }
