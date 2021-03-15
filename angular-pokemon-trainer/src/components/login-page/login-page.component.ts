import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Router } from '@angular/router'
import { AppRoutes } from 'src/app/enums/app-routes.enum'

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(private localStorageService: LocalStorageService, private readonly router: Router) {}

  loginForm: FormGroup = new FormGroup({
    trainerName: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(10)
    ])
  });

  setTrainerName() {
    let trainerName = this.loginForm.value
    this.localStorageService.set('trainerName', trainerName);
  };

  handleLoginSuccess() {
    this.router.navigateByUrl( AppRoutes.POKEMON )
  }
}