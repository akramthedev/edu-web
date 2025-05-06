import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-why-us',
  imports: [CommonModule],
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.css'
})
export class WhyUsComponent {



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
