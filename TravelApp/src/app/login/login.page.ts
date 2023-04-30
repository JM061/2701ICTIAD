import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 // users = [
 //   {username:"jMurphy", fNname: "Jacob", lName: "Murphy", email:"jrmurph06@gmail.com", password:"abcd"},
 //   {username:"bMurphy", fNname: "Bryce", lName: "Murphy", email:"bjmurph06@gmail.com", password:"1234"},
 // ]

  //username: string = '';
  //password: string = '';
  //showError: boolean = false;

  constructor(private router:Router) { }

  ngOnInit() {

  }

  //const user = this.checkAccounts(this.username, this.password);
  //checkUserPass(){
  //  if (this.checkAccounts(this.username, this.password)){
  //    this.router.navigate(['/tabs', {fName: user.fName}])
  //  } else{
//
  //  this.showError = true;
  //  }
  //}
  //  checkAccounts(username: string, password: string): any{
//
  //  const user = this.users.find((u) => u.username ===username && u.password ===password);
  //  return user !== undefined;
  //}
//





}
