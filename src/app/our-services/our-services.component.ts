import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent implements OnInit {

  ourServicesImg: string;

  constructor() { 
    this.ourServicesImg = '/assets/images/code_services.png';
  }

  ngOnInit() {
  }

}
