import { Component, Input, OnInit } from '@angular/core';
import { PostitProxy } from 'src/app/models/proxies/postit.proxy';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss'],
})
export class FeedItemComponent implements OnInit {

  @Input()
  public postit: PostitProxy;

  public isLiked = false;

  constructor() { }

  ngOnInit() { }

  public setLikeOnToPostIt(): void {
    this.isLiked = !this.isLiked;
  }
}

//2:10
