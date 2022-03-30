import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  tabSearch: boolean = false;
  tabHome: boolean = false;
  tabSegment: boolean = false;
  tabContact: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  ionTabsWillChange(event: any){

    switch( event.tab) {
      case "home-page":

        this.tabHome = true;
        this.tabSearch = false;
        this.tabSegment = false;
        this.tabContact = false;

      break;
      case "search-page":

        this.tabHome = false
        this.tabSearch = true
        this.tabSegment = false;
        this.tabContact = false;
    
      break;
      case "section-page":

        this.tabHome = false
        this.tabSearch = false;
        this.tabSegment = true;
        this.tabContact = false;
       
      break;
      case "contact-page":

        this.tabHome = false;
        this.tabSearch = false;
        this.tabSegment = false
        this.tabContact = true;
       
        break;
    } 

  }

}
