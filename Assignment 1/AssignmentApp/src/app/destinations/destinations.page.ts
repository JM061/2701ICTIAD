import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.page.html',
  styleUrls: ['./destinations.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DestinationsPage implements OnInit {

  destinations = [
    {location:'New Zealand', travelDate:'29/11/2023', description:''},
    {location:'Gold Coast', travelDate:'12/09/2023', description:''},
    {location:'New York', travelDate:'29/03/2024', description:''}
];


  constructor() { }

  ngOnInit() {
  }

}
