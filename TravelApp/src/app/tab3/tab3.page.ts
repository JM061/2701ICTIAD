import { Component } from '@angular/core';
import { UserStorageService } from '../user-storage.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
//this page will display the users account, number of trips, user can change their name, emial and password


  userData: any;

  constructor(private userStorage: UserStorageService) {}


  ionViewWillEnter() {
    this.loadUser();
  }

  async loadUser(){
    this.userData = await this.userStorage.getUser();
    console.log(this.userData)
  }




}
