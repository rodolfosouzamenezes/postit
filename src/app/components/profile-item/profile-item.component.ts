import { Component, Input, OnInit } from '@angular/core';
import { PostitProxy } from 'src/app/models/proxies/postit.proxy';
import { UserProxy } from 'src/app/models/proxies/user.proxy';
import { HelperService } from 'src/app/services/helper.service';
import { UserServise } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile-item',
  templateUrl: './profile-item.component.html',
  styleUrls: ['./profile-item.component.scss'],
})
export class ProfileItemComponent implements OnInit {
  @Input()
  public postit: PostitProxy;
  public myUser: UserProxy;
  public isLoading = false;


  constructor(
    public readonly user: UserServise,
    public readonly helper: HelperService,
  ) { }

  public async ngOnInit(
  ) {
    await this.getMyUser();
  }

  public async getMyUser(): Promise<void> {
    this.isLoading = true;
    const [user, errorMessage] = await this.user.getUser(+localStorage.getItem(environment.keys.user));
    this.isLoading = false;

    if (errorMessage) {return this.helper.showToast(errorMessage, 5_000);}

    this.myUser = user;
  }
}
