import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutes } from 'src/app/enums/app-routes.enum';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'trainer-page',
  templateUrl: './trainer-page.component.html',
  styleUrls: ['./trainer-page.component.css']
})

export class TrainerPageComponent {

  constructor(private localStorageService: LocalStorageService, private readonly router: Router) {

  }
  
  collectedPokemons = JSON.parse(this.localStorageService.get('collectedPokemons'))
  
  trainerName = this.localStorageService.get('trainerName').trainerName
  
  clearStorageAndLogout() {
    this.localStorageService.remove('trainerName')
    this.localStorageService.remove('collectedPokemons')
    this.router.navigateByUrl( AppRoutes.LOGIN )
  }
}
