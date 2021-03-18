import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from 'src/components/404-page/not-found.component';
import { LoginPageComponent } from 'src/components/login-page/login-page.component';
import { PokemonCatalogueComponent } from 'src/components/pokemon-catalogue/pokemon-catalogue.component';
import { PokemonDetailComponent } from 'src/components/pokemon-detail/pokemon-detail.component';
import { TrainerPageComponent } from 'src/components/trainer-page/trainer-page.component';
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
  {
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
    path: 'trainer/:name',
    component: PokemonDetailComponent,
    canActivate: [ SessionGuard ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
