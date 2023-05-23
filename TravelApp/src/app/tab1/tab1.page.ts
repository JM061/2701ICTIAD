import { Component, ViewChild } from '@angular/core';

declare let google;
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
// this page will display a map that will display teh destinations that are found in the list on tab2.
  @ViewChild('map', { static: true }) mapElement;
  map: any;
  pos: any;

  constructor() { }


  ngOnInit() {
    console.log("Map Loading...")
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        let pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        this.map.setCenter(pos)
        })
    }

    let mapOptions = {
      center: this.pos,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    console.log("Map has been created.")
  }




}
