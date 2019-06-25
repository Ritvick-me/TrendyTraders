import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  links=[
    {name: "Home", address: "/"},
    {name: "Services", address: "Services"},
    {name: "Get Appointment", address: "Services"},
    {name: "About Us", address: "About Us"}
  ]

  constructor() { }

  ngOnInit() {}

}
