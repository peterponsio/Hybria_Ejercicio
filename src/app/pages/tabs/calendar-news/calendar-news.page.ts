import { element } from 'protractor';
import { Component, ContentChildren, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { IonDatetime, LoadingController } from '@ionic/angular';
import { DataServiceService } from 'src/app/services/data-service.service';
import { NativeService } from 'src/app/services/native.service';

@Component({
  selector: 'app-calendar-news',
  templateUrl: './calendar-news.page.html',
  styleUrls: ['./calendar-news.page.scss'],
})
export class CalendarNewsPage implements OnInit {

  constructor(private data:DataServiceService,private native:NativeService,private loadingController: LoadingController) { }

  listEvents:any[] = [];
  
  daySelected: string = "";

  eventDay: any = [];

  mydate : string;

  

  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;

  @ContentChildren('parent') parentChilds: QueryList<any>;


  ionViewWillEnter() {

    this.native.presentLoading();

    this.data.getEventsDay().subscribe((res)=>{
      this.listEvents = res;
      console.log(res);
      

      let date = new Date().toISOString().substr(0, 10);

      this.daySelected =  date.toString();
    
      this.eventDay = this.listEvents.find(data => data.day == this.daySelected);
  
      this.eventDay = this.eventDay.event;

      this.listEvents.forEach(element => {
        console.log(element);
        
      });

      this.loadingController.dismiss();
    })

  }

  ngOnInit() {

 
  }

  seeDayData(event: any ){

    console.log(this.parentChilds.toArray());
    this.daySelected = event.detail.value.split("T")[0];
  
    this.eventDay = this.listEvents.find(data => data.day == this.daySelected);

    console.log( event.detail.value);
    

    this.eventDay = this.eventDay.event;
    
    
    
  }

}
