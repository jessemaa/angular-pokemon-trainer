import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginPageComponent } from 'src/components/login-page/login-page.component';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from '../components/app-header/app-header.component';
import { PokemonCatalogueComponent } from '../components/pokemon-catalogue/pokemon-catalogue.component';
import { TrainerPageComponent } from '../components/trainer-page/trainer-page.component'
import { ReactiveFormsModule } from '@angular/forms';
import { PokemonDetailComponent } from 'src/components/pokemon-detail/pokemon-detail.component';
import { NotFoundComponent } from 'src/components/404-page/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AppHeaderComponent,
    PokemonCatalogueComponent,
    TrainerPageComponent,
    PokemonDetailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
