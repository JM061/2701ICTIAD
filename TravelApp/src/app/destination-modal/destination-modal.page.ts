import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  ViewChild,
  importProvidersFrom,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController, NavParams } from '@ionic/angular';
import { UserStorageService, Destination } from '../user-storage.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-destination-modal',
  templateUrl: './destination-modal.page.html',
  styleUrls: ['./destination-modal.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class DestinationModalPage implements OnInit {
  location: string;
  description: string;
  travelDate: string;
  tripLength: number;
  accomType: string;

  constructor(
    private nav: NavParams,
    private modalController: ModalController
  ) {}

  addDestination() {
    const destination = {
      location: this.location,
      description: this.description,
      travelDate: this.travelDate,
      tripLength: this.tripLength,
      accomType: this.accomType,
    };
    this.modalController.dismiss(destination);
  }

  //gets the data from the user input
  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss();
  }
}
