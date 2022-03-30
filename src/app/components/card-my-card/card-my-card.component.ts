import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-my-card',
  templateUrl: './card-my-card.component.html',
  styleUrls: ['./card-my-card.component.scss'],
})
export class CardMyCardComponent implements OnInit {

  @Input() myCars: any[];
  @Input() garage: any[];

  @Output() addCar = new EventEmitter();
 
  constructor() { }

  slideOpts = {
    slidesPerView: 1.5,
    freeMode: true,
    spaceBetween:-18
  };


  ngOnInit() {}

  onClickAddCar(){
    console.log("add car");
    
  }

  addCarItem(){
    this.addCar.emit();
  }

}
