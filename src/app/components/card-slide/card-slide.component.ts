import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-slide',
  templateUrl: './card-slide.component.html',
  styleUrls: ['./card-slide.component.scss'],
})
export class CardSlideComponent implements OnInit {

  constructor() { }

  slideOpts = {
    slidesPerView: 1.5,
    freeMode: true,
    spaceBetween: -18
  };

  ngOnInit() {}

}
