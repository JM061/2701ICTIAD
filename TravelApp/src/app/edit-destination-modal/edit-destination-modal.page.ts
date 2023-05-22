import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-destination-modal',
  templateUrl: './edit-destination-modal.page.html',
  styleUrls: ['./edit-destination-modal.page.scss'],
})
export class EditDestinationModalPage implements OnInit {

  destinations: any;

  constructor(private modalController: ModalController, private activatedRoute:ActivatedRoute) { }

  ngOnInit() { }









  dismissModal() {
    this.modalController.dismiss();
  }
}
