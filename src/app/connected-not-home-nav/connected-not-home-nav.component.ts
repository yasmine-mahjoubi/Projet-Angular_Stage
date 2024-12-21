import { Component } from '@angular/core';

@Component({
  selector: 'app-connected-not-home-nav',
  templateUrl: './connected-not-home-nav.component.html',
  styleUrls: ['./connected-not-home-nav.component.scss']
})
export class ConnectedNotHomeNavComponent {
  isMenuOpened: boolean = false;

  toggleMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
    console.log('clicked inside');
    console.log(this.isMenuOpened);
  }

  clickedOutsideUserSpace(): void{
    this.isUserSpaceOpened=false;
  }

  isServicesOpened:boolean=false;

  openServices():void{
    this.isServicesOpened=!this.isServicesOpened;
  }

  clickedOutsideServices():void{
    this.isServicesOpened=false;
  }

  isProfileOpened:boolean=false;

  openProfile():void{
    this.isProfileOpened=!this.isProfileOpened;
  }

  clickedOutsideProfile():void{
    this.isProfileOpened=false;
  }

  clickedOutside(): void {
      this.isMenuOpened= false;
      console.log('clicked outside');
      console.log(this.isMenuOpened);
  }

  clickedOutsideNotif() : void{
    this.isNotifOpened=false;
  }

  isUserSpaceOpened: boolean = false;

  openUserSpace():void{
    this.isUserSpaceOpened=!this.isUserSpaceOpened;
  }

  isSectionsMenuOpened = false;

  isNotifOpened : boolean = false;

  displayNotif(){
    this.isNotifOpened = !this.isNotifOpened;
  }
  
  sections = [
    { id: 'actualite', name: 'Actualité' },
    { id: 'rappelez-vous', name: 'Rappelez Vous!' },
    { id: 'nos-valeurs', name: 'Nos valeurs' },
    { id: 'qui-sommes-nous', name: 'Qui sommes nous?' },
    { id: 'notre-projet', name: 'Notre projet' },
    { id: 'nos-services', name: 'Nos services' }
  ];
}
