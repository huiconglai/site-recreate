import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  logoPath: string;
  fullImagePath: string;
  constructor() {
    this.logoPath = '/assets/images/snappymob-logo.png'
    this.fullImagePath = '/assets/images/guide.jpg'
  }
  

  ngOnInit() {
  }

}
