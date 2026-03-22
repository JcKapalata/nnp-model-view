import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatChipsModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss',
})
export class AccueilComponent {
  // Catégories pour le filtre
  categories = signal([
    'TOUT', 'DOCUMENTAIRES', 'FILMS', 'SERIES', 'NNP PODCAST', 'EMISSION', 'WHATS\'UP NNP', 'NNP FREESTYLE'
  ]);

  categorySelected = signal('TOUT');

  // Données du Hero Banner
  hero = {
    category: 'SLAM POÉSIE ET FREESTYLE',
    title: "NNP Freestyle avec Franky'D",
    description: "Découvrez la performance exceptionnelle de Franky'D, notre slameuse passionnée, qui manie les mots comme personne pour émouvoir et éveiller les consciences.",
    tags: ['#slampoesie', '#slam', '#performance', '#freestyle', '#production'],
    bgImage: 'assets/franky-bg.jpg' // Assurez-vous d'avoir cette image
  };

  selectCategory(cat: string) {
    this.categorySelected.set(cat);
  }
}