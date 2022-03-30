import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.page.html',
  styleUrls: ['./search-page.page.scss'],
})
export class SearchPagePage implements OnInit {

  listCars: any[] = [];
  filterText: string = "";

  constructor(private data:DataServiceService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.data.getCarList().subscribe((res)=>{
      console.log(res);
      this.listCars = res;
    })
  }

  changeFilter(event : any){
    console.log(event.detail.value);
    this.filterText = event.detail.value;
  }


}
