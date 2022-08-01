import { Component, Input, OnInit } from '@angular/core';
import { PostitProxy } from 'src/app/models/proxies/postit.proxy';

@Component({
  selector: 'app-profile-item',
  templateUrl: './profile-item.component.html',
  styleUrls: ['./profile-item.component.scss'],
})
export class ProfileItemComponent implements OnInit {
  @Input()
  public postit: PostitProxy;

  constructor() { }

  ngOnInit() {}

}
