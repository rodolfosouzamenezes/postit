import { Component } from '@angular/core';
import { FeedPostitProxy } from 'src/app/models/proxies/feed-postit.proxy';
import { NoteService } from 'src/app/modules/http-async/service/note.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage {
  public postitArray: FeedPostitProxy[] = [];
  public isLoading = false;

  constructor(
    private readonly note: NoteService,
    private readonly helper: HelperService,
  ) {}

  public async ionViewDidEnter(): Promise<void> {
    await this.loadFeedNotes();
  }

  public async loadFeedNotes(): Promise<void> {
    this.isLoading = true;
    const [postits, message] = await this.note.getFeedNotes();
    this.isLoading = false;

    if (message) {return this.helper.showToast(message, 5_000);};

    this.postitArray = postits;
  }
}
