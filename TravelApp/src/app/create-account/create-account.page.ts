import { Component, OnInit } from '@angular/core';
import { UserStorageService } from '../user-storage.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {
  fName: string = '';
  lName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = ''; //user will retype in password to confirm it
  showError: boolean = false; //will not show error on page when loaded

  //this page will be fully implemented in Assignment 2, it will allow new users to create an account.
  //it will add their informationt to the database and store it so they will be able to log into the app
  constructor(private UserStorage: UserStorageService) {}

  ngOnInit() {}

  async createUserAccount() {
    await this.UserStorage.createUserAndLogin(
      this.email,
      this.password,
      this.fName,
      this.lName
    );
  }

  comparePasswords() {
    if (this.confirmPassword === this.password) {
      this.createUserAccount();
    } else {
      console.log('Error Passwords do not match');
    }
  }
}
