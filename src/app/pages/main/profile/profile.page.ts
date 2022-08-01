import { Component, OnInit } from '@angular/core';
import { PostitColorEnum } from 'src/app/models/enums/postit-color.enum';
import { PostitProxy } from 'src/app/models/proxies/postit.proxy';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public postitArray: PostitProxy[] = [
    {
      id: 0,
      title: 'Alongamento para atletas',
      annotation: 'Paragraph porttitor libero a metus mollis, a condimentum enim dignissim. Phasellus feugiat risus in odio imperdiet, at convallis dolor venenatis. Ut eu interdum nulla. Orci varius natoque penatibus et magnis dis parturient montes,',
      color: PostitColorEnum.GREEN,
    },
    {
      id: 1,
      title: 'Como ter uma rotina',
      annotation: 'Paragraph porttitor libero a metus mollis, a condimentum enim dignissim. Phasellus feugiat risus in odio imperdiet, at convallis dolor venenatis. Ut eu interdum nulla. Orci varius natoque penatibus et magnis dis parturient montesr',
      color: PostitColorEnum.YELLOW,
    },
    {
      id: 2,
      title: 'Titulo do post 2',
      annotation: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, itaque! Consectetur dolores praesentium reprehender',
      color: PostitColorEnum.RED,
    },
    {
      id: 3,
      title: 'Titulo do post 3',
      annotation: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, itaque! Consectetur dolores praesentium reprehender',
      color: PostitColorEnum.PINK,
    },
    {
      id: 4,
      title: 'Titulo do post 4',
      annotation: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, itaque! Consectetur dolores praesentium reprehender',
      color: PostitColorEnum.PURPLE,
    },
    {
      id: 5,
      title: 'Titulo do post 5',
      annotation: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, itaque! Consectetur dolores praesentium reprehender',
      color: PostitColorEnum.RED,
    },
    {
      id: 6,
      title: 'Titulo do post 6',
      annotation: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, itaque! Consectetur dolores praesentium reprehender Lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, itaque! Consectetur dolores praesentium reprehender Lorem',
      color: PostitColorEnum.BLUE,
    },
    {
      id: 7,
      title: 'Titulo do post 7',
      annotation: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, itaque! Consectetur dolores praesentium reprehender',
      color: PostitColorEnum.GREEN,
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
