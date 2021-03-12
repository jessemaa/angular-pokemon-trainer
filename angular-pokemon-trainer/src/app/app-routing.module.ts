import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from 'src/components/login-page/login-page.component';
import { PokemonCatalogueComponent } from 'src/components/pokemon-catalogue/pokemon-catalogue.component';
import { SessionGuard } from './guards/session.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'pokemon',
    component: PokemonCatalogueComponent,
    canActivate: [ SessionGuard ]
  },
/*   {
    path: 'pokemon/:name',
    component: PokemonDetailComponent,
    canActivate: [ SessionGuard ]
  },
  {
    path: 'trainer',
    component: TrainerPageComponent,
    canActivate: [ SessionGuard ]
  },
  {
    path: '**',
    component: NotFoundComponent
  } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
