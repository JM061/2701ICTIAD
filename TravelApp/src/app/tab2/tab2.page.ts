import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestinationModalPage } from '../destination-modal/destination-modal.page';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  fName: any = ''
  location:any = '';
  travelDate:any = '';
  description:any = '';

  destinations = [
    {location:'New Zealand', travelDate:'29/11/2023', description:''},
    {location:'Gold Coast', travelDate:'12/09/2023', description:''},
    {location:'New York', travelDate:'29/03/2024', description:''}
];



  constructor(private route:ActivatedRoute, private modalController:ModalController) {




  }
  ngOnInit(): void {
    this.fName = this.route.snapshot.paramMap.get('fName');
  }
  async presentModal(){
    const modal = await this.modalController.create({
                component:DestinationModalPage,
                componentProps: {location: this.location, travelDate: this.travelDate, description: this.description}
    });
    modal.onDidDismiss()
              .then((data) => {
                  this.location = data.data.location;
                  this.travelDate = data.data.travelDate
                  this.description = data.data.description
              });
            return modal.present();
}

}
