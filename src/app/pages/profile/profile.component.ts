import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggedinNavbarComponent } from '../../components/loggedin-navbar/loggedin-navbar.component';

@Component({
  selector: 'app-profile',
  imports: [
    LoggedinNavbarComponent, 
    CommonModule, 
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  standalone : true,  
})
export class ProfileComponent  implements OnInit{

  ngOnInit(): void {
    
  }


}
