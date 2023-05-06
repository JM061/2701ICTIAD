import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 users = [ //array of users for login page
    {fName: "Jacob", lName: "Murphy", email:"jacobemail@gmail.com", password:"abcd"},
    {fName: "Bryce", lName: "Murphy", email:"bryceemail@gmail.com", password:"1234"},
    {fName: "Test", lName: "test", email:"test@test.com.au", password:"test"},
    {fName: "", lName: "", email:"test@test.com.au", password:""}
  ]
  fName: string = '';
  password: string = '';
  showError: boolean = false; //will not show error on page when loaded

  constructor(private router:Router) { }

  ngOnInit() {

  }


  checkUserPass(){
    const user = this.checkAccounts(this.fName, this.password);//takes first name and password from login page
    if (this.checkAccounts(this.fName, this.password)){//if the firstname and password are found the page will direct to /tabs
      this.router.navigate(['/tabs', {fName: user.fName}])
      //login()
    } else{

    this.showError = true;//if the firstname and password is not found it will display the error which is found on the html page
    }
  }
    checkAccounts(fName: string, password: string): any{
    const user = this.users.find((u) => u.fName ===fName && u.password ===password);//checks array of existing users, if a match is found it navigates to the tabs page redirecting to tab2
    return user !== undefined;
  }



  //login(){
    //this.storage.set("username", this.username);
    //this.router.navigateByUrl('/account/' + this.username);

  //}

  }


