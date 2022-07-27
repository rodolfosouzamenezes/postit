import { Component } from '@angular/core';
import { LoginPayload } from 'src/app/models/payloads/login.pyloads';
import { RegisterPayload } from 'src/app/models/payloads/register.pyloads';
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

  public registerPayload: RegisterPayload= {
    name: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
  };

  public showSign = false;
  public isRegistering = false;
  public isLoading = false;

  constructor(
    private readonly helper: HelperService,
    ) { }

  public logoClick($event: boolean): void {
    console.log($event);
  }

  //LOGIN
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

  //SIGN
  public async sign() {
    this.showSign = true;
    this.isRegistering = true;
    console.log(this.showSign);
  }

  public setButtonMessage(): string {
    if (this.showSign) {
      return this.isRegistering ? 'carregando...' : 'criar conta';
    }
    return (this.isLoading ? 'carregando...' : 'confirmar');
  }
}
