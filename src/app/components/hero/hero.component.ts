import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css', 
  standalone: true, // to make the component be imported inside others
})
export class HeroComponent {

}
