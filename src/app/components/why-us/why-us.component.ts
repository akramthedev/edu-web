import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';



@Component({
  selector: 'app-why-us',
  imports: [CommonModule],
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.css', 
})
export class WhyUsComponent {



   

  images = [
    
    'assets/screen14.png',
    'assets/screen15.png',

    'assets/screen12.png',
    'assets/screen16.png',
    'assets/screen3.jpg',
    'assets/screen2.jpg',
    'assets/screen1.jpg',
    'assets/screen13.png',
    'assets/screen4.jpg',
    'assets/screen5.jpg',
    'assets/screen6.jpg',
    'assets/screen7.jpg',
    'assets/screen8.jpg',
    'assets/screen9.png',
    'assets/screen10.png',
    'assets/screen11.png',
    
  ];

  currentIndex = 0;

  imagesPerView = 3;

  get displayedImages() {
    return this.images.slice(this.currentIndex, this.currentIndex + this.imagesPerView);
  }

  next() {
    if (this.currentIndex + this.imagesPerView < this.images.length) {
      this.currentIndex++;
    }
  }

  previous() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }


  faqs = [
    {
      question: "Comment créer un compte ?",
      isOpen : false,
      answer: "Pour créer un compte, il suffit de cliquer sur 'Inscription' et de suivre les étapes simples."
    },
    {
      question: "Est-ce que mes données sont sécurisées ?",
      isOpen : false,
      answer: "Oui, toutes vos données sont protégées par des systèmes de chiffrement avancés et sont stockées en toute sécurité."
    },
    {
      question: "Comment réinitialiser mon mot de passe ?",
      isOpen : false,
      answer: "Cliquez sur 'Mot de passe oublié' lors de la connexion et suivez les instructions pour réinitialiser votre mot de passe."
    }
  ];




  toggleAnswer(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }


}
