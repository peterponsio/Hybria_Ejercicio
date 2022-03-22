import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SectionPagePageRoutingModule } from './section-page-routing.module';

import { SectionPagePage } from './section-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SectionPagePageRoutingModule
  ],
  declarations: [SectionPagePage]
})
export class SectionPagePageModule {}
