import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SectionPagePage } from './section-page.page';

const routes: Routes = [
  {
    path: '',
    component: SectionPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SectionPagePageRoutingModule {}
