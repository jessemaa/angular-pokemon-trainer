import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(private localStorageService: LocalStorageService) {}

  setTrainerName() {
    let trainerName = ((document.getElementById('trainerName') as HTMLInputElement).value)
    this.localStorageService.set('trainerName', trainerName);
  }

  getTrainerName() {
    console.log(this.localStorageService.get('trainerName'))
  }
}