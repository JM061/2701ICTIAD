import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DestinationModalPage } from '../destination-modal/destination-modal.page';
import { ModalController } from '@ionic/angular';
import { UserStorageService } from '../user-storage.service';
import { Storage } from '@ionic/storage-angular';
import { EditDestinationModalPage } from '../edit-destination-modal/edit-destination-modal.page';
import { LocationMapViewComponent } from '../location-map-view/location-map-view.component';
const DESTINATION_KEY = 'destinationData';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  //initialises variables used on this page
  destinations: any[];
  userData: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private modalController: ModalController,
    private storageService: UserStorageService,
    private storage: Storage
  ) {}

  //get the username that the user logs in with to display on main page
  ngOnInit(): void {}

  ionViewWillEnter() {
    this.loadDestinations();
    this.loadUser();
  }

  async loadUser(){
    this.userData = await this.storageService.getUser();
    console.log(this.userData)
  }

  async loadDestinations() {
    this.destinations = await this.storageService.getDestinations();
    console.log('Loaded Destinations:', this.destinations);
  }

  async removeDestination(index: number) {
    await this.storageService.removeDestination(index);
    await this.loadDestinations();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: DestinationModalPage,
    });

    modal.onDidDismiss().then((data) => {
      if (data?.data) {
        this.storageService.saveDestination(data.data);
        this.loadDestinations();
      }
    });
    return await modal.present();
  }

  async editDestinationModal(index: number) {
    const destinations = await this.storage.get(DESTINATION_KEY);
    const destination = destinations[index];
    console.log(destination)
    const modal = await this.modalController.create({
      component: EditDestinationModalPage,
      componentProps: {
        location: destination.location,  description: destination.description, travelDate: destination.travelDate, tripLength: destination.tripLength, accomType: destination.accomType
      }
    });
    modal.onDidDismiss().then((data) => {
      if (data && data.data) {
        destinations[index] = data.data;
        this.storage.set(DESTINATION_KEY, destinations)
        this.loadDestinations();
      }
    });
    return await modal.present()
  }




  async locationMapView(index: number){
    const destinations = await this.storage.get(DESTINATION_KEY);
    const destination = destinations[index];
    //console.log(destination)
    const modal = await this.modalController.create({
      component: LocationMapViewComponent,
      componentProps: {mapCenterLocation: destination.location}
    });
    return await modal.present()




  }








}
