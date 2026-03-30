import { Component, inject, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { ThemeServices } from '../Services/theme-services';

@Component({
  selector: 'navbar-component',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule, 
    MatMenuModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  
  readonly themeService = inject(ThemeServices);

  // État du menu mobile
  isMenuOpen = signal(false);

  // Nouveau signal pour le mode sombre (vrai par défaut comme demandé)
  // isDarkMode = signal(true);

  // État de la langue sélectionnée (Français par défaut)
  currentLang = signal({
    label: 'FR',
    flag: 'lang/francais.png'
  });

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  // On appelle simplement la méthode du service
  toggleTheme() {
    this.themeService.toggleTheme();
  }

  changeLang(lang: 'fr' | 'en') {
    if (lang === 'fr') {
      this.currentLang.set({ label: 'FR', flag: 'lang/francais.png' });
    } else {
      this.currentLang.set({ label: 'EN', flag: 'lang/anglais.png' });
    }
  }
}