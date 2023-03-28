import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  clickCounter: number = 0
  username: any;

  constructor(private router: Router) { }

  itemClicked() {
    this.clickCounter += 1
  };

  login() {
    this.clickCounter++;
    this.router.navigateByUrl('/account/' + this.username);
  };


}
