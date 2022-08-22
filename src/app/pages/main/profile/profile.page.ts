import { Component, OnInit } from '@angular/core';
import { PostitColorEnum } from 'src/app/models/enums/postit-color.enum';
import { PostitProxy } from 'src/app/models/proxies/postit.proxy';
import { UserProxy } from 'src/app/models/proxies/user.proxy';
import { NoteService } from 'src/app/modules/http-async/service/note.service';
import { HelperService } from 'src/app/services/helper.service';
import { UserServise } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  public postitArray: PostitProxy[] = [];
  public isLoading = false;
  public myUser: UserProxy;

  constructor(
    public readonly note: NoteService,
    public readonly user: UserServise,
    public readonly helper: HelperService,
    ) { }

  public async ionViewDidEnter(): Promise<void> {
    await this.loadMyNotes();
    await this.getMyUser();
  }

  public async loadMyNotes(): Promise<void> {
    this.isLoading = true;
    const [notes, errorMessage] = await this.note.getMyPublicNotes();
    this.isLoading = false;

    if (errorMessage) {return this.helper.showToast(errorMessage, 5_000);}

    this.postitArray = notes;
  }

  public async getMyUser(): Promise<void> {
    this.isLoading = true;
    const [user, errorMessage] = await this.user.getUser(+localStorage.getItem(environment.keys.user));
    this.isLoading = false;

    if (errorMessage) {return this.helper.showToast(errorMessage, 5_000);}

    this.myUser = user;
  }

}
