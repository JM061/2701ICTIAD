import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { UserStorageService } from '../user-storage.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  fName: string = '';
  password: string = '';
  showError: boolean = false; //will not show error on page when loaded

  constructor(
    private router: Router,
    private userService: UserStorageService,
    private navcontroller: NavController
  ) {}

  ngOnInit() {}

  async login(fName: string, password: string) {
    const success = await this.userService.login(fName, password);
    if (success) {
      this.navcontroller.navigateRoot(['/tabs', { state: { fName: fName } }]);
    } else {
      this.showError = true; //if the firstname and password is not found it will display the error which is found on the html page
    }
  }

  //  checkUserPass() {
  //    const user = this.checkAccounts(this.fName, this.password); //takes first name and password from login page
  //    if (this.checkAccounts(this.fName, this.password)) {
  //      //if the firstname and password are found the page will direct to /tabs
  //      this.router.navigate(['/tabs', { fName: user.fName }]);
  //      //login()
  //    } else {
  //      this.showError = true; //if the firstname and password is not found it will display the error which is found on the html page
  //    }
  //  }
  //  checkAccounts(fName: string, password: string): any {
  //    const user = this.users.find(
  //      (u) => u.fName === fName && u.password === password
  //    ); //checks array of existing users, if a match is found it navigates to the tabs page redirecting to tab2
  //    return user !== undefined;
  //  }

  //login(){
  //this.storage.set("username", this.username);
  //this.router.navigateByUrl('/account/' + this.username);

  //}
}
