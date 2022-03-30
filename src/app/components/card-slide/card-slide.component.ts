import { ViewWillEnter } from './../../../../node_modules/@ionic/angular/types/ionic-lifecycle-hooks.d';
import { Component, Input, OnInit, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-card-slide',
  templateUrl: './card-slide.component.html',
  styleUrls: ['./card-slide.component.scss'],
})
export class CardSlideComponent implements OnInit {


  @Input() listCars: any[];


  @Input() profileList: boolean;

  @Output() refreshDataProfile = new EventEmitter();

  @Input() listFavs: any[];


  constructor(private data:DataServiceService) {
   }

  slideOpts = {
    slidesPerView: 1.5,
    freeMode: true,
    spaceBetween: -18
  };

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
   // console.log(changes)
   }

  ViewWillEnter(){
    
    // this.data.getFavList().subscribe((res)=>{
    //   this.listFavs = res;
      
    // })

    // console.log(this.listFavs);

    console.log(this.listFavs);
    
  }

  onClickAddRemoveFav(item : any){
  
    this.listFavs.find( data => data.id == item.id) ? this.data.removeFav(item).subscribe(res=>{ this.listFavs = this.listFavs.filter(data => data.id != item.id)}) : this.data.addFav(item).subscribe(res=>{this.listFavs = [res,...this.listFavs] });

  }

  removeInsideFavs(item:any){
    this.data.removeFav(item).subscribe((res)=>{ 

      this.listCars = this.listCars.filter(data => data.id != item.id);      
    });
  }

  isFav(item:any): boolean{
    return !!this.listFavs.find( data => data.id === item.id);
  }

}
