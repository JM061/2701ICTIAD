import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  ViewChild,
  importProvidersFrom,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController, NavParams } from '@ionic/angular';
import { UserStorageService } from '../user-storage.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-destination-modal',
  templateUrl: './destination-modal.page.html',
  styleUrls: ['./destination-modal.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class DestinationModalPage implements OnInit {
  fName: string;
  location: string;
  travelDate: string;
  description: string;
  accomType: string;
  tripLength: any;

  constructor(
    private nav: NavParams,
    private modalController: ModalController,
    private userStorage: UserStorageService,
    private storage: Storage
  ) {}

  //gets the data from the user input
  ngOnInit() {
    this.location = this.nav.get('location');
    this.travelDate = this.nav.get('travelDate');
    this.description = this.nav.get('description');
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  async addDestination() {
    const updatedDestinations = await this.userStorage.addDestination(
      this.fName,
      this.location,
      this.travelDate,
      this.description,
      this.tripLength,
      this.accomType
    );

    console.log(
      'New Destination:',
      this.location,
      this.travelDate,
      this.description,
      this.tripLength,
      this.accomType
    );
  }
}
