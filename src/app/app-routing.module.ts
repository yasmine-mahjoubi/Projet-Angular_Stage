
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModiEventComponent } from './modi-event/modi-event.component';
import { AjouterEventComponent } from './ajouter-event/ajouter-event.component';
import { ProfilComponent } from './profil/profil.component';
import { AboutComponent } from './about/about.component';
import { FiscalityComponent } from './fiscality/fiscality.component';
import { ComptabiliteComponent } from './comptabilite/comptabilite.component';
import { SaisieComptableComponent } from './saisie-comptable/saisie-comptable.component';
import { SaisieManuelComponent } from './saisie-manuel/saisie-manuel.component';
import { FichierrecapComponent } from './fichierrecap/fichierrecap.component';
import { FichierDeclarationComponent } from './fichier-declaration/fichier-declaration.component';

const routes: Routes = [
  {path:'modi',component: ModiEventComponent},
  {path:'aj',component:  AjouterEventComponent},
  {path:'prof',component:   ProfilComponent},
    {path:'about',component:   AboutComponent  },
    {path:'fisc',component:  FiscalityComponent     },
    {path:'comptab',component:   ComptabiliteComponent     },{ path: 'saisie-comptable', component: SaisieComptableComponent },
    {path:'saisiemanuel',component:   SaisieManuelComponent    },{path:'fichierrecap',component: FichierrecapComponent},{path:'fichierdeclaration',component: FichierDeclarationComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
