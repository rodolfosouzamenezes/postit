import { Injectable } from '@angular/core';
import { apiRoutes } from 'src/environments/api-routes';
import { environment } from 'src/environments/environment';
import { TokenProxy } from '../models/payloads/token.proxy';
import { HttpAsyncService } from '../modules/http-async/service/http-async.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly http: HttpAsyncService){}
  public async login(
      username: string,
      password: string,
    ): Promise<[isSuccess: boolean, erroMessage: string | undefined]> {
    const [ token,  error ] = await this.http.post<TokenProxy>(apiRoutes.auth.login, {
      username,
      password,
    });

    if(error) {
      return [ false, error.error.message ];
    }

    localStorage.setItem(environment.keys.token, token.token);

    return [true, 'Bem-vindo de volta!'];
  }
}
