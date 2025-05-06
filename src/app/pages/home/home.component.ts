import { Component, OnInit } from '@angular/core';
import {HeroComponent}  from "../../components/hero/hero.component" 
// if u wanna use import HerComponent just add default into the component, but this isn't React
import {NavbarComponent} from "../../components/navbar/navbar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent, 
    NavbarComponent, 
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css', 
  standalone : true,   
})
export class HomeComponent  implements OnInit {

  ngOnInit(): void {
    
  }

}
