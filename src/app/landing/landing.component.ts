import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  logoPath: string;
  fullImagePath: string;
  bfmCarPlayPath: string;
  constructor() {
    this.logoPath = '/assets/images/snappymob-logo.png'
    this.fullImagePath = '/assets/images/guide.jpg'
    this.bfmCarPlayPath = '/assets/images/BFM_Car_Play.png'
  }
  

  ngOnInit() {
  }

}
