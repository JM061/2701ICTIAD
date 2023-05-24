import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserStorageService } from '../user-storage.service';
declare let google;
var geocoder = new google.maps.Geocoder();

@Component({
  selector: 'app-location-map-view',
  templateUrl: './location-map-view.component.html',
  styleUrls: ['./location-map-view.component.scss'],
})

export class LocationMapViewComponent  implements OnInit {
  @ViewChild('map', { static: true }) mapElement;
  map: any;
  pos: any;
  mapCenterLocation: string;

  constructor( private modalController: ModalController, private storageService: UserStorageService) { }


  ngOnInit() {
    this.generateMap();
    //this.mapMarker();
  }






  generateMap(){
    console.log("Map Loading...")

   // if (navigator.geolocation) {
   //   navigator.geolocation.getCurrentPosition(position => {
   //     let pos = {
   //       lat: position.coords.latitude,
   //       lng: position.coords.longitude
   //     }
   //     this.map.setCenter(pos)
   //     })
   // }


   const locationName = this.mapCenterLocation
   console.log(locationName)
   geocoder.geocode({address: locationName}, function(results, status) {
     if (status === google.maps.GeocoderStatus.OK && results.length > 0) {
       var markerLocation = results[0].geometry.location;
       console.log('Latitude: ', markerLocation.lat());
       console.log('Longitude: ', markerLocation.lng());
         let locationLat =  markerLocation.lat()
         let locationLng =  markerLocation.lng()
      let pos = {
        lat: locationLat,
        lng: locationLng
      }
      console.log(pos)

     } else {
       console.log("Geocoding Failed: ", status)
     }

     this.map.setCenter(this.pos)

   });
    let mapOptions = {
      center: this.pos,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    console.log("Map has been created.")
  }

  mapMarker(){
    const locationName = this.mapCenterLocation
    console.log(locationName)
    geocoder.geocode({address: locationName}, function(results, status) {
      if (status === google.maps.GeocoderStatus.OK && results.length > 0) {
        var markerLocation = results[0].geometry.location;
        console.log('Latitude: ', markerLocation.lat());
        console.log('Longitude: ', markerLocation.lng());
          let locationLat =  markerLocation.lat()
          let locationLng =  markerLocation.lng()
      } else {
        console.log("Geocoding Failed: ", status)
      }
    });

  }
  backButton(){
      this.modalController.dismiss();
    }

}



