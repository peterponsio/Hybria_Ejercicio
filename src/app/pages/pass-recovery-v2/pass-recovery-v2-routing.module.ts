import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassRecoveryV2Page } from './pass-recovery-v2.page';

const routes: Routes = [
  {
    path: '',
    component: PassRecoveryV2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassRecoveryV2PageRoutingModule {}
