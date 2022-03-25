
import { Keyboard } from '@awesome-cordova-plugins/keyboard/ngx';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassRecoveryV2PageRoutingModule } from './pass-recovery-v2-routing.module';

import { PassRecoveryV2Page } from './pass-recovery-v2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassRecoveryV2PageRoutingModule,
    ReactiveFormsModule,
    
   
  ],
  declarations: [PassRecoveryV2Page,]
})
export class PassRecoveryV2PageModule {}
