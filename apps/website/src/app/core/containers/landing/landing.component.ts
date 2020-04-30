import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'website-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  currentYear = new Date().getFullYear();
  developmentYears = this.currentYear - 2009;
  isAuthenticated = false;
  constructor() { }

  ngOnInit(): void { }

  login(): void {

  }
  signup(): void {

  }
  contactMe(): void {
    alert('Not yet implemented.');
  }
  logout(): void {

  }
}
