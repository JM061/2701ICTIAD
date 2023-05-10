import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class UserStorageService {
  private userLoggedIn: string;

  constructor(public storage: Storage, private router: Router) {
    this.storage.create();
  }

  async initStorage() {}

  async createUserAndLogin(
    email: string,
    password: string,
    fName: string,
    lName: string
  ) {
    // create a new user with the given email, password, first name, and last name
    // store the user data in Ionic Storage
    const userData = { email, password, fName, lName, destinations: [] };
    await this.storage.set(fName, userData);
    console.log(fName, password);
    // automatically log the user in
    return this.login(fName, password);
  }

  async login(fName: string, password: string): Promise<boolean> {
    const userData = await this.storage.get(fName);
    if (userData && userData.password === password) {
      this.userLoggedIn = fName;
      this.router.navigate(['tabs', { fName }]);
      return true;
    }
    return false;
  }

  async addDestination(
    fName: string,
    location: string,
    travelDate: string,
    description: string,
    tripLength: any,
    accomType: string
  ) {
    // add a new destination to the user's list of destinations
    // return a Promise that resolves to the updated list of destinations
    const userData = await this.storage.get(fName);
    if (userData) {
      const destination = {
        location,
        travelDate,
        description,
        tripLength,
        accomType,
        events: [],
      };

      userData.destinations.push(destination);
      await this.storage.set(fName, userData);
      return userData.destinations;
    } else {
      return [];
    }
  }

  async addDetails(
    fName: string,
    destinationIndex: number,
    tripLength: number,
    accomType: string
  ) {
    // add tripLength and accomType to the specified destination
    // return a Promise that resolves to the updated list of destinations
    const userData = await this.storage.get(fName);
    if (userData && userData.destinations[destinationIndex]) {
      userData.destinations[destinationIndex].tripLength = tripLength;
      userData.destinations[destinationIndex].accomType = accomType;
      await this.storage.set(fName, userData);
      return userData.destinations;
    } else {
      return [];
    }
  }

  async addEvent(
    fName: string,
    destinationIndex: number,
    name: string,
    date: string,
    description: string
  ) {
    // add a new event to the specified destination
    // return a Promise that resolves to the updated list of events for the destination
    const event = { name, date, description };
    const userData = await this.storage.get(fName);
    if (userData && userData.destinations[destinationIndex]) {
      userData.destinations[destinationIndex].events.push(event);
      await this.storage.set(fName, userData);
      return userData.destinations[destinationIndex].events;
    } else {
      return [];
    }
  }

  async getDestinations(fName: string) {
    // get the list of destinations for the specified user
    // return a Promise that resolves to the list of destinations
    const userData = await this.storage.get(fName);
    if (userData) {
      return userData.destinations;
    } else {
      return [];
    }
  }
}
