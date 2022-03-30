import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarNewsPageRoutingModule } from './calendar-news-routing.module';

import { CalendarNewsPage } from './calendar-news.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarNewsPageRoutingModule,
    ComponentsModule,
   
  ],
  declarations: [CalendarNewsPage]
})
export class CalendarNewsPageModule {}
