import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { ConnectedHomeNavComponent } from '../connected-home-nav/connected-home-nav.component';
import { ConnectedNotHomeNavComponent } from '../connected-not-home-nav/connected-not-home-nav.component';
import { DisconnectedHomeNavComponent } from '../disconnected-home-nav/disconnected-home-nav.component';
import { DisconnectedNotHomeNavComponent } from '../disconnected-not-home-nav/disconnected-not-home-nav.component';

@Component({
  selector: 'app-navbar-switcher',
  templateUrl: './navbar-switcher.component.html',
  styleUrls: ['./navbar-switcher.component.scss']
})
export class NavbarSwitcherComponent {
  @ViewChild('navbarContainer', { read: ViewContainerRef, static: true }) navbarContainer!: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) { }

  loadNavbar(navbar: string) {
    this.navbarContainer.clear();
    let componentFactory;
    switch (navbar) {
      case 'ConnectedHomeNavbar':
        componentFactory = this.resolver.resolveComponentFactory(ConnectedHomeNavComponent);
        break;
      case 'DisconnectedHomeNavbar':
        componentFactory = this.resolver.resolveComponentFactory(DisconnectedHomeNavComponent);
        break;
      case 'ConnectedNotHomeNavbar':
        componentFactory = this.resolver.resolveComponentFactory(ConnectedNotHomeNavComponent);
        break;
      case 'DisconnectedNotHomeNavbar':
        componentFactory = this.resolver.resolveComponentFactory(DisconnectedNotHomeNavComponent);
        break;
    }
    if (componentFactory) {
      this.navbarContainer.createComponent(componentFactory);
    }
  }
}
