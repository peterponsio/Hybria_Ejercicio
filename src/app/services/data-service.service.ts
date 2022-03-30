import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  carList: any[] = [];

  constructor(private httpClient: HttpClient) { }


  getCarList(): Observable<any>{
    return this.httpClient.get(("api/cars/"));
  }

  getGarage(): Observable<any>{
    return this.httpClient.get(("api/garage/"));
  }


  addCar(data:any): Observable<any> {
    return this.httpClient.post<any>("api/garage/", data);
   }  

   addFav(data:any): Observable<any> {
    return this.httpClient.post<any>("api/favs/", data);
   }  

   removeFav(data:any): Observable<any> {
     console.log(data)
    return this.httpClient.delete<any>(`api/favs/${data.id}`);
   }  

   getUsers(): Observable<any>{
    return this.httpClient.get(("api/users/"));
   }

   
   getFavList(): Observable<any>{
    return this.httpClient.get(("api/favs/"));
   }

   getEventsDay(): Observable<any>{
    return this.httpClient.get(("api/calendarEvents/"));
   }

   getAccesories(): Observable<any>{
     return this.httpClient.get(("api/accesories/"));
   }

}
