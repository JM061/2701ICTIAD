import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-destination-modal',
  templateUrl: './destination-modal.page.html',
  styleUrls: ['./destination-modal.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})



export class DestinationModalPage implements OnInit {
  location = '';
  travelDate = '';
  description = '';

  constructor(private nav: NavParams, private modalController:ModalController) { }

  ngOnInit() {
    this.location = this.nav.get("location")
    this.travelDate = this.nav.get("travelDate")
    this.description = this.nav.get("description")
  }

  dismissModal(){
    this.modalController.dismiss({location: this.location, travelDate: this.travelDate, description: this.description})
  }
}
