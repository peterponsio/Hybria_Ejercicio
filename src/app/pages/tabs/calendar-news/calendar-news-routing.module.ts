import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarNewsPage } from './calendar-news.page';

const routes: Routes = [
  {
    path: '',
    component: CalendarNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarNewsPageRoutingModule {}
