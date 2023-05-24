import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { UserStorageService } from '../user-storage.service';

@Component({
  selector: 'app-edit-destination-modal',
  templateUrl: './edit-destination-modal.page.html',
  styleUrls: ['./edit-destination-modal.page.scss'],
})
export class EditDestinationModalPage implements OnInit {
  location: string;
  description: string;
  travelDate: string;
  tripLength: number;
  accomType: string;
  destinations: any;


  constructor(private modalController: ModalController, private activatedRoute:ActivatedRoute, private userStorage: UserStorageService) { }

  ngOnInit() {



  }



  editDestination() {
    const destination = {
      location: this.location,
      description: this.description,
      travelDate: this.travelDate,
      tripLength: this.tripLength,
      accomType: this.accomType,
    };

    this.modalController.dismiss(destination)
    console.log("Destination Has been changed!! :)")
  }

  dismissModal() {
    this.modalController.dismiss();
  }
}
