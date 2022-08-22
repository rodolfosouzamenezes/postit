import { Injectable } from '@angular/core';
import { AsyncResult } from '../models/interfaces/async-result';
import { HttpAsyncService } from '../modules/http-async/service/http-async.service';
import { UserProxy } from '../models/proxies/user.proxy';
import { apiRoutes } from 'src/environments/api-routes';


@Injectable({
  providedIn: 'root',
})
export class UserServise {
  constructor(private readonly http: HttpAsyncService) {}

  public async getUser(userId: number): Promise<AsyncResult<UserProxy>> {
    const [success, error] = await this.http.get<UserProxy>(
      apiRoutes.users.get.replace('{userId}', userId.toString())
    );

    if (error) { return [, error.error.message]; }

    return [success];
  }
}
