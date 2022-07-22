import { Component, OnInit } from '@angular/core';
import { LoginPayload } from 'src/app/models/payloads/login.pyloads';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public loginPayload: LoginPayload = {
    email: '',
    password: '',
  };
  public isLoading = false;
  constructor() { }

  ngOnInit() {
  }

  public canLogin(): boolean {
    const regex = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');

    const emailIsValid = regex.test(this.loginPayload.email);

    if (emailIsValid && this.loginPayload.password.length >= 6) {return true;}

    return false;
  }

  public logoClick($event: boolean): void {
    console.log($event);
  }
}
