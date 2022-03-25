import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactPagePageRoutingModule } from './contact-page-routing.module';

import { ContactPagePage } from './contact-page.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactPagePageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [ContactPagePage]
})
export class ContactPagePageModule {}
