import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedPostitProxy } from 'src/app/models/proxies/feed-postit.proxy';
import { NoteService } from 'src/app/modules/http-async/service/note.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-feed-detail',
  templateUrl: './feed-detail.page.html',
  styleUrls: ['./feed-detail.page.scss'],
})
export class FeedDetailPage implements OnInit {
  public postit: FeedPostitProxy;
  public isLoading = false;
  public commentText = '';
  private postitId = 0;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly note: NoteService,
    private readonly router: Router,
    private readonly helper: HelperService,
    ) {
      this.postitId = +this.activatedRoute.snapshot.params.id;
    }

    public ngOnInit(): void {
      this.getPostit();
    }

  public async getPostit(): Promise<void> {
    const [postit, message] = await this.note.get(this.postitId);

    if (message) {
      this.helper.showToast(message, 5_000);
      return void this.router.navigateByUrl('/feed');
    }

    this.postit = postit;
  }

  public async setLikeOnToPostIt(): Promise<void> {
    this.isLoading = true;
    const [, errorMessage] = await this.note.setLikeOnPostit(this.postit);
    this.isLoading = false;

    if (errorMessage) {return this.helper.showToast(errorMessage, 5_000);}
    this.postit.hasLiked = !this.postit.hasLiked;
  }

  public async sendComment(): Promise<void> {
    this.isLoading = true;
    const [comment, errorMessage] = await this.note.sendComment(this.postit.id, this.commentText);
    this.isLoading = false;

    if (errorMessage) {return this.helper.showToast(errorMessage, 5_000);}

    comment.user = this.postit.user;
    this.commentText = '';
    this.postit.comments.push(comment);
  }
}
