import { Component, signal, OnInit, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SafeUrlPipe } from '../pipes/safe-url.pipe-pipe';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, SafeUrlPipe],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss',
})
export class AccueilComponent implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  
  categories = signal(['TOUT', 'DOCUMENTAIRES', 'FILMS', 'SERIES', 'NNP PODCAST', 'EMISSION', 'WHATS\'UP NNP', 'NNP FREESTYLE']);
  categorySelected = signal('TOUT');

  heroSlides = [
    {
      id: 1,
      type: 'video',
      videoId: 'QpHSydRv9do',
      category: 'SLAM POÉSIE',
      title: "NNP Freestyle avec Franky'D",
      description: "Performance exceptionnelle de slam.",
      tags: ['#slam', '#performance']
    },
    {
      id: 2,
      type: 'image',
      image: 'hero/hero-001.jpg', 
      category: 'DOCUMENTAIRE',
      title: "Au cœur du Congo",
      description: "Immersion dans la culture congolaise.",
      tags: ['#congo', '#culture']
    },
    {
      id: 3,
      type: 'image',
      image: 'hero/hero-002.jpg',
      category: 'SERIES',
      title: "Les Chroniques de Goma",
      description: "Le quotidien de la jeunesse créative.",
      tags: ['#goma', '#serie']
    },
    {
      id: 3,
      type: 'image',
      image: 'hero/hero-003.jpg',
      category: 'PODCAST',
      title: "Vérifier l’information",
      description: "Ne pas laisser les fausses infos brouiller notre regard ",
      tags: ['#congo', '#culture']
    }
  ];

  currentIndex = signal(0);
  private timer: any;

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.startTimer();
    }
  }

  startTimer() {
    this.timer = setInterval(() => {
      // On ne change pas de slide si c'est une vidéo en cours
      if (this.heroSlides[this.currentIndex()].type !== 'video') {
        this.nextSlide();
      }
    }, 15000);
  }

  nextSlide() { this.currentIndex.update(i => (i + 1) % this.heroSlides.length); }
  prevSlide() { this.currentIndex.update(i => (i - 1 + this.heroSlides.length) % this.heroSlides.length); }
  
  selectCategory(cat: string) { this.categorySelected.set(cat); }

  ngOnDestroy() { if (this.timer) clearInterval(this.timer); }
}