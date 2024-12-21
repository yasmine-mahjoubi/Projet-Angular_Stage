import { Component,HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-disconnected-home-nav',
  templateUrl: './disconnected-home-nav.component.html',
  styleUrls: ['./disconnected-home-nav.component.scss']
})
export class DisconnectedHomeNavComponent {
  isMenuOpened: boolean = false;

  toggleMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
    console.log('clicked inside');
    console.log(this.isMenuOpened);
  }

  clickedOutside(): void {
      this.isMenuOpened= false;
      console.log('clicked outside');
      console.log(this.isMenuOpened);
  }

  itemsSectionVisible: boolean = false;

  displaySectionItems() : void {
    this.itemsSectionVisible = !this.itemsSectionVisible;
  }
  sections = [
    { id: 'actualite', name: 'Actualité' },
    { id: 'rappelez-vous', name: 'Rappelez Vous!' },
    { id: 'nos-valeurs', name: 'Nos valeurs' },
    { id: 'qui-sommes-nous', name: 'Qui sommes nous?' },
    { id: 'notre-projet', name: 'Notre projet' },
    { id: 'nos-services', name: 'Nos services' }
  ];

  activeSection: string = '';

  ngOnInit() {
    this.onScroll();
  }

  scrollToSection(id: string) {
    document.getElementById(id)!.scrollIntoView({ behavior: 'smooth' });
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    let currentSection = '';
    this.sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 175 && rect.bottom > 175) {
          currentSection = section.id;
        }
      }
    });
    this.activeSection = currentSection;
  }

}
