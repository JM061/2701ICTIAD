import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DestinationModalPage } from '../destination-modal/destination-modal.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  //initialises variables used on this page
  fName: string = ''

  location:any = '';
  travelDate:any = '';
  description:any = '';
//array of destinations for the list
//it will be moved to an SQLite DB for assignment 2, to each account to have separate destinations, each destination will have more data
//number of days, accomidation type, type of trip, activities, etc..
  destinations = [
    {location:'New Zealand', travelDate:'29/11/2023', description:'Birthday Celebration'},
    {location:'Gold Coast', travelDate:'12/09/2023', description:'Weekend Getaway'},
    {location:'New York', travelDate:'29/03/2024', description:'Family Celebration'}
];



  constructor(private activatedRoute:ActivatedRoute, private router:Router, private modalController:ModalController) {}

//get the username that the user logs in with to display on main page
  ngOnInit(): void {


  }


  getFName(){
    this.fName = this.activatedRoute.snapshot.queryParamMap.get('fName');

  }



//removes the selected list item using the index
  deleteDestination(index){
    this.destinations.splice(index, 1)
  }

//presents the modal that allows the user to add a destination
  async presentModal(){
    const modal = await this.modalController.create({
                component:DestinationModalPage,
                componentProps: [{location: this.location, travelDate: this.travelDate, description: this.description}]
    });
    modal.onDidDismiss()//dismisses the modal and pushes the data to the array that displays the destinations
              .then((data) => {
                this.location = data.data.location;
                this.travelDate = data.data.travelDate;
                this.description = data.data.description;
                console.log(data)
                  this.destinations.push(data.data)
              });
            return modal.present();
}

//when the user selects the edit button in the slide menu, will display the edit screen
//user can edit the destination
  async editDestination(index){
    let modal = await this.modalController.create({
                component:DestinationModalPage,
                componentProps: {location: this.destinations[index].location, travelDate: this.destinations[index].travelDate, description: this.destinations[index].description}
    });
      //when the modal is dismissed it changes the data in the array.
      //will then update the list
      modal.onDidDismiss()
        .then((data) => {
          this.location = data.data.location;
          this.travelDate = data.data.travelDate;
          this.description= data.data.description;
          this.destinations[index]=(data.data)
        })
        return modal.present()
  }







}
