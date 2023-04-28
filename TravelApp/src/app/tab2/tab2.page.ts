import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  fName: any = ''
  destinations = [
    {location:'New Zealand', travelDate:'29/11/2023', description:''},
    {location:'Gold Coast', travelDate:'12/09/2023', description:''},
    {location:'New York', travelDate:'29/03/2024', description:''}
];



  constructor(private route:ActivatedRoute) {}
  ngOnInit(): void {
    this.fName = this.route.snapshot.paramMap.get('fName');
  }

}
