import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassRecoveryV2PageRoutingModule } from './pass-recovery-v2-routing.module';

import { PassRecoveryV2Page } from './pass-recovery-v2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassRecoveryV2PageRoutingModule
  ],
  declarations: [PassRecoveryV2Page]
})
export class PassRecoveryV2PageModule {}
