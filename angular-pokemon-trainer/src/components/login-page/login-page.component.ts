import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(private localStorageService: LocalStorageService) {}

  loginForm: FormGroup = new FormGroup({
    trainerName: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(10)
    ])
  });

  setTrainerName() {
    let trainerName = this.loginForm.value
    console.log('this is going in',this.loginForm.value)
    this.localStorageService.set('trainerName', trainerName);
    console.log('this is in localstorage', this.localStorageService.get('trainerName'))
  }

/*   getTrainerName() {
    console.log(this.localStorageService.get('trainerName'))
  } */
}