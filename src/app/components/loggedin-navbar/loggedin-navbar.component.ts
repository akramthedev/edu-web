import { Component,HostListener, OnInit  } from '@angular/core';
import {CommonModule} from "@angular/common";
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-loggedin-navbar',
  imports: [CommonModule],
  templateUrl: './loggedin-navbar.component.html',
  styleUrl: './loggedin-navbar.component.css'
})
export class LoggedinNavbarComponent {
 
  constructor(private router: Router){

  }

  isMobile = false;
  isScrolled = false;
  isNavbarOpen = false;
  private mobileBreakPoint = 1024; 

  ngOnInit(): void {
    this.checkScreenDim();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenDim();
  }

  @HostListener('window:scroll')
  onWindowScroll(){
    this.isScrolled = window.pageYOffset > 25
  }

  private checkScreenDim(){
    // without using if else, this will automatically return false or true based on this, this is a good practice in javascript
    // to shorten code and make it More readeable ! ! !
    this.isMobile = window.innerWidth <= this.mobileBreakPoint; 
  }


  reloadPage(){
    window.location.reload();
  }

  toggleNavbar(){
    this.isNavbarOpen = !this.isNavbarOpen;
  }

}
