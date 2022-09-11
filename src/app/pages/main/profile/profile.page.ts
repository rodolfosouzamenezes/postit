import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileSettingsEnum } from 'src/app/models/enums/profile-settings.enum';
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
  public profileSettingsEnum: typeof ProfileSettingsEnum = ProfileSettingsEnum;

  constructor(
    public readonly note: NoteService,
    public readonly user: UserServise,
    public readonly helper: HelperService,
    public readonly router: Router,
  ) { }

  public async ionViewDidEnter(): Promise<void> {
    await this.loadMyNotes();
    await this.getMyUser();
  }

  public async loadMyNotes(): Promise<void> {
    this.isLoading = true;
    const [notes, errorMessage] = await this.note.getMyPublicNotes();
    this.isLoading = false;

    if (errorMessage) { return this.helper.showToast(errorMessage, 5_000); }

    this.postitArray = notes;
  }

  public async getMyUser(): Promise<void> {
    this.isLoading = true;
    const [user, errorMessage] = await this.user.getUser(+localStorage.getItem(environment.keys.user));
    this.isLoading = false;

    if (errorMessage) { return this.helper.showToast(errorMessage, 5_000); }

    this.myUser = user;
  }

  public async clickConfigList(selectedSettings: ProfileSettingsEnum): Promise<void> {
    if (selectedSettings === ProfileSettingsEnum.EDIT_PROFILE) {
      return this.helper.showToast('Em desenvolvimento');
    }
    if (selectedSettings === ProfileSettingsEnum.EDIT_PROFILE_PICTURE) {
      return this.helper.showToast('Em desenvolvimento');
    }
    if (selectedSettings === ProfileSettingsEnum.ABOUT_US) {
      return this.helper.showToast('Em desenvolvimento', 2_000);
    }
    if (selectedSettings === ProfileSettingsEnum.EXIT) {
      localStorage.clear();
      return void await this.router.navigate(['/login']);
    }
  }

  public secondsToMilliseconds(seconds: number) {
    const RELATION_SECONDS_MILLISECONDS = 1000;

    return seconds * RELATION_SECONDS_MILLISECONDS;
  }
}
