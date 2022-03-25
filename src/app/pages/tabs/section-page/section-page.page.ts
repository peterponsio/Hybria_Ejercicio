import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-page',
  templateUrl: './section-page.page.html',
  styleUrls: ['./section-page.page.scss'],
})
export class SectionPagePage implements OnInit {

  constructor() { }

  isPremiun: any;

  ngOnInit() {
  }

  segmentChanged( event : any ){
    event.detail.value == "premiun" ? this.isPremiun = true : this.isPremiun = false;
  
  }

}
