import { Component,HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-connected-home-nav',
  templateUrl: './connected-home-nav.component.html',
  styleUrls: ['./connected-home-nav.component.scss']
})

export class ConnectedHomeNavComponent implements OnInit {
  isMenuOpened: boolean = false;

  toggleMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
    console.log('clicked inside');
    console.log(this.isMenuOpened);
  }

  isProfileOpened:boolean=false;

  openProfile():void{
    this.isProfileOpened=!this.isProfileOpened;
  }

  clickedOutsideProfile():void{
    this.isProfileOpened=false;
  }

  itemsUserSpaceVisible:boolean=false;
  displayUserSpaceItems():void{
    this.itemsUserSpaceVisible=!this.itemsUserSpaceVisible;
  }

  itemsServicesVisible: boolean=false;
  displayServicesItems():void{
    this.itemsServicesVisible=!this.itemsServicesVisible;
  }

  clickedOutside(): void {
      this.isMenuOpened= false;
      console.log('clicked outside');
      console.log(this.isMenuOpened);
  }

  clickedOutsideNotif() : void{
    this.isNotifOpened=false;
  }


  isNotifOpened : boolean = false;

  displayNotif(){
    this.isNotifOpened = !this.isNotifOpened;
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
