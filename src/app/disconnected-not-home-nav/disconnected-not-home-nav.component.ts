import { Component } from '@angular/core';

@Component({
  selector: 'app-disconnected-not-home-nav',
  templateUrl: './disconnected-not-home-nav.component.html',
  styleUrls: ['./disconnected-not-home-nav.component.scss']
})
export class DisconnectedNotHomeNavComponent {
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

}
