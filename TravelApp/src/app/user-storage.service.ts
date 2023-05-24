import { Injectable, destroyPlatform } from '@angular/core';
import { Router } from '@angular/router';
import { destroyView } from '@ionic/angular/directives/navigation/stack-utils';
import { Storage } from '@ionic/storage-angular';

const USER_KEY = 'accountData';
const DESTINATION_KEY = 'destinationData';
const LOGGEDIN_USER = 'LoggedIN';
export interface Destination {
  destinationId: number;
  location: string;
  description: string;
  travelDate: string;
  tripLength: number;
  accomType: string;
}

export interface UserAccount {
  userId: number;
  fName: string;
  lName: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserStorageService {
  constructor(public storage: Storage, private router: Router) {
    this.storage.create();
  }

  async createUserAndLogin(
    email: string,
    password: string,
    fName: string,
    lName: string
  ) {
    // create a new user with the given email, password, first name, and last name
    // store the user data in Ionic Storage
    const userData = { email, password, fName, lName };
    await this.storage.set(USER_KEY, userData);
    console.log(USER_KEY, password);
    // automatically log the user in
    return this.login(USER_KEY, password);
  }

  async login(fName: string, password: string): Promise<boolean> {
    const userData = await this.storage.get(USER_KEY);
    if (userData && userData.password === password) {
      await this.storage.set(LOGGEDIN_USER, fName);
      this.router.navigate(['/tabs', { fName }]);
      return true;
    }
    return false;
  }

  async saveDestination(destination: any) {
    let destinations = await this.getDestinations();
    if (!destinations) {
      destinations = [];
    }
    destinations.push(destination);
    console.log('Added Destination: ', destinations);

    await this.storage.set(DESTINATION_KEY, destinations);
  }

  async getDestinations() {
    const destinations = await this.storage.get(DESTINATION_KEY);
    return destinations || [];
  }

  async getUser() {
    const user = await this.storage.get(USER_KEY);
    return user;
  }

  async getLoggedIn() {
    const loggedInUser = await this.storage.get(LOGGEDIN_USER);
    return loggedInUser;
  }

  async removeDestination(index: number) {
    const destinations = await this.storage.get(DESTINATION_KEY);
    if (destinations && Array.isArray(destinations)) {
      destinations.splice(index, 1);
      await this.storage.set(DESTINATION_KEY, destinations);
    }
  }

  async EditDestination(index: number){
    const selectedDestinations = await this.storage.get(DESTINATION_KEY);
    }




}





//
//removeDestination(destinationId: number) {
//  return this.storage
//    .get(DESTINATION_KEY)
//    .then((Destinations: Destination[]) => {
//      if (!Destinations || Destinations.length === 0) {
//        console.log(
//          'No destinations currently found. Please Add a destination :)'
//        );
//        return null;
//      }
//      let toKeep: Destination[] = [];
//
//      for (let i of Destinations) {
//        if (i.destinationId !== destinationId) {
//          toKeep.push(i);
//        }
//      }
//      return this.storage.set(DESTINATION_KEY, toKeep);
//    });
//}
//
//async addDetails(
//  fName: string,
//  destinationIndex: number,
//  tripLength: number,
//  accomType: string
//) {
//  // add tripLength and accomType to the specified destination
//  // return a Promise that resolves to the updated list of destinations
//  const userData = await this.storage.get(STORAGE_KEY);
//  if (userData && userData.destinations[destinationIndex]) {
//    userData.destinations[destinationIndex].tripLength = tripLength;
//    userData.destinations[destinationIndex].accomType = accomType;
//    await this.storage.set(STORAGE_KEY, userData);
//    return userData.destinations;
//  } else {
//    return [];
//  }
//}
//
//async addEvent(
//  fName: string,
//  destinationIndex: number,
//  name: string,
//  date: string,
//  description: string
//) {
//  // add a new event to the specified destination
//  // return a Promise that resolves to the updated list of events for the destination
//  const event = { name, date, description };
//  const userData = await this.storage.get(STORAGE_KEY);
//  if (userData && userData.destinations[destinationIndex]) {
//    userData.destinations[destinationIndex].events.push(event);
//    await this.storage.set(STORAGE_KEY, userData);
//    return userData.destinations[destinationIndex].events;
//  } else {
//    return [];
//  }
//}
//}//
//
