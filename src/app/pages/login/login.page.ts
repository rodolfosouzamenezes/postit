import { Component } from '@angular/core';
import { LoginPayload } from 'src/app/models/payloads/login.pyloads';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  public loginPayload: LoginPayload = {
    email: '',
    password: '',
  };
  public isLoading = false;

  constructor(
    private readonly helper: HelperService,
  ) { }

  public async login(): Promise<void> {
    if(!this.canLogin()) {return;}
    this.isLoading = true;

    //toast
    await this.helper.showToast('Carregando...');

    //alert
    await this.helper.showAlert('Está Logando', [
      {
        text:'CANCELAR',
        handler: () => { console.log('CANCELAR');},
      },
      {
        text:'OK',
        handler: () => { console.log('OK');},
      },
  ]);
    console.log(this.loginPayload);
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
