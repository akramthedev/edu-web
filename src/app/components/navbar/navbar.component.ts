import { Component,HostListener, OnInit  } from '@angular/core';
import {CommonModule} from "@angular/common";
import { Router } from '@angular/router'; 
// you can import only this `NgIf` and use it in imports or import the entire library CommonModule 
// in order to use other tools like `ngFor` and `NgClass` and `ngIf`


@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router){

  }

  isMobile = false;
  isScrolled = false;
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

}
