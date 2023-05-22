import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DestinationModalPage } from '../destination-modal/destination-modal.page';
import { ModalController } from '@ionic/angular';
import { UserStorageService } from '../user-storage.service';
import { EditDestinationModalPage } from '../edit-destination-modal/edit-destination-modal.page';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  //initialises variables used on this page
  fName: string;
  destinations: any[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private modalController: ModalController,
    private storageService: UserStorageService
  ) {}

  //get the username that the user logs in with to display on main page
  ngOnInit(): void {}

  ionViewWillEnter() {
    this.loadDestinations();
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

  async editDestinationModal() {
    const modal = await this.modalController.create({
      component: EditDestinationModalPage,
      componentProps: {
        destinations: this.destinations,
      },
    });
    modal.onDidDismiss().then((data) => {
      if (data?.data) {
        this.storageService.saveDestination(data.data);
        this.loadDestinations();
      }
    });
  }

  //  //presents the modal that allows the user to add a destination
  //  async presentModal() {
  //    const modal = await this.modalController.create({
  //      component: DestinationModalPage,
  //      componentProps: [
  //        {
  //          location: this.location,
  //          travelDate: this.travelDate,
  //          description: this.description,
  //        },
  //      ],
  //    });
  //    modal
  //      .onDidDismiss() //dismisses the modal and pushes the data to the array that displays the destinations
  //      .then((data) => {
  //        this.location = data.data.location;
  //        this.travelDate = data.data.travelDate;
  //        this.description = data.data.description;
  //        console.log(data);
  //        this.destinations.push(data.data);
  //      });
  //    return modal.present();
  //  //}

  //  //when the user selects the edit button in the slide menu, will display the edit screen
  //  //user can edit the destination
  //  async editDestination(index) {
  //    let modal = await this.modalController.create({
  //      component: DestinationModalPage,
  //      componentProps: {
  //        location: this.destinations[index].location,
  //        travelDate: this.destinations[index].travelDate,
  //        description: this.destinations[index].description,
  //      },
  //    });
  //    //when the modal is dismissed it changes the data in the array.
  //    //will then update the list
  //    modal.onDidDismiss().then((data) => {
  //      this.location = data.data.location;
  //      this.travelDate = data.data.travelDate;
  //      this.description = data.data.description;
  //      this.destinations[index] = data.data;
  //    });
  //    return modal.present();
  //  }//
  //}
}
