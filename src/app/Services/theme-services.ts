import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeServices {
  // On récupère la préférence stockée, sinon par défaut c'est 'dark' (true)
  private readonly STORAGE_KEY = 'nnp-theme';
  
  // Signal réactif pour l'état du thème
  isDarkMode = signal<boolean>(this.getInitialTheme());

  constructor() {
    // Un 'effect' s'exécute automatiquement dès que le signal change
    effect(() => {
      const dark = this.isDarkMode();
      
      // Mise à jour du LocalStorage
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(dark));
      
      // Mise à jour de la classe CSS sur le body
      if (!dark) {
        document.body.classList.add('light-mode');
      } else {
        document.body.classList.remove('light-mode');
      }
    });
  }

  toggleTheme() {
    this.isDarkMode.update(v => !v);
  }

  private getInitialTheme(): boolean {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    // Si rien n'est stocké, on retourne true (Sombre par défaut)
    return saved ? JSON.parse(saved) : true;
  }
}