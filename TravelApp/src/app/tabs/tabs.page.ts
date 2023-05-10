import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage{
  fName: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.fName = this.activatedRoute.snapshot.paramMap.get('fName');
  }

}
