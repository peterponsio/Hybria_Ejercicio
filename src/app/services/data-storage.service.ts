import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';


@Injectable({
  providedIn: 'root'
})
export class DataStorageService {


  private _storage: Storage | null = null;

  private user: any;

  constructor(private storage: Storage) {

    this.init();
  
   }

   async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }


  async saveUserData(data: any){
    await this._storage.set('userData', data.username);
  }

  async removeUserData(){
    await this._storage.remove("userData");
  }

   loginSave(){

    const datos = this._storage.get("userData").then(res=>{
      return res;
    })
    
    console.log(datos);
   
  }

}
