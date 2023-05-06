import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

const Storage_Key:string = 'loginData';


@Injectable({
  providedIn: 'root'
})
export class UserdataService {


  constructor(private storage:Storage) {
    this.init();
   }

  init() {
    this.storage.create()
  }



  getUserData(){
    return this.storage.get(Storage_Key) || [];
  }


  addAccountData(){


  }
}
