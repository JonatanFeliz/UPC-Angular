import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  
  ngOnInit(): void {
    
  }

  // if user is logged, logout button will be visibility and log in button hide
  // else, log in button will be visibility and logout button hide
  oculta_login:boolean = true;
  oculta_logout:boolean = false;


}
