import { Component, Input, OnInit } from '@angular/core';
import { FeedPostitProxy } from 'src/app/models/proxies/feed-postit.proxy';
import { NoteService } from 'src/app/modules/http-async/service/note.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss'],
})
export class FeedItemComponent {
  @Input()
  public postit: FeedPostitProxy;

  public isLoading = false;

  constructor(
    private readonly note: NoteService,
    private readonly helper: HelperService,
  ) {}
  public async setLikeOnToPostIt(): Promise<void> {
    this.isLoading = true;
    const [, errorMessage] = await this.note.setLikeOnPostit(this.postit);
    this.isLoading = false;

    if (errorMessage) {return this.helper.showToast(errorMessage, 5_000);}
    this.postit.hasLiked = !this.postit.hasLiked;
  }
}
