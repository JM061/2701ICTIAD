import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 users = [
    {fName: "Jacob", lName: "Murphy", email:"jrmurph06@gmail.com", password:"abcd"},
    {fName: "Bryce", lName: "Murphy", email:"bjmurph06@gmail.com", password:"1234"},
    {fName: "Test", lName: "test", email:"test@test.com.au", password:"test"},
    {fName: "", lName: "", email:"test@test.com.au", password:""}
  ]
  fName: string = '';
  password: string = '';
  showError: boolean = false;

  constructor(private router:Router) { }

  ngOnInit() {

  }


  checkUserPass(){
    const user = this.checkAccounts(this.fName, this.password);
    if (this.checkAccounts(this.fName, this.password)){
      this.router.navigate(['/tabs', {fName: user.fName}])
    } else{

    this.showError = true;
    }
  }
    checkAccounts(fName: string, password: string): any{

    const user = this.users.find((u) => u.fName ===fName && u.password ===password);
    return user !== undefined;
  }






}
