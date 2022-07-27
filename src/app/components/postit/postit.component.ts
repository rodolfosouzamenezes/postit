import { Component, Input, OnInit } from '@angular/core';
import { PostitProxy } from 'src/app/models/proxies/postit.proxy';

@Component({
  selector: 'app-postit',
  templateUrl: './postit.component.html',
  styleUrls: ['./postit.component.scss'],
})
export class PostitComponent implements OnInit {

  @Input()
  public postit: PostitProxy;

  constructor() { }

  ngOnInit() {}
}
