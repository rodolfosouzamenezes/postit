import { Component, OnInit } from '@angular/core';
import { PostitColorEnum } from 'src/app/models/enums/postit-color.enum';
import { PostitProxy } from 'src/app/models/proxies/postit.proxy';
import { HttpAsyncService } from 'src/app/modules/http-async/service/http-async.service';
import { apiRoutes } from 'src/environments/api-routes';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  public postitArray: PostitProxy[] = [
    {
      id: 0,
      title: 'Anotações da aula de anatomia',
      annotation: 'Anatomia (do grego ἀνατέμνω anatemnō "cortar em partes") é o campo da biologia que estuda a organização estrutural dos seres vivos, incluindo os sistemas, órgãos e tecidos que os constituem, a aparência e posição das várias partes, as substâncias de que são feitos, a sua localização e a sua relação com outras partes do corpo. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, itaque! Consectetur dolores praesentium reprehender',
      color: PostitColorEnum.RED,
    },
    {
      id: 1,
      title: 'Titulo do post 1',
      annotation: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, itaque! Consectetur dolores praesentium reprehender',
      color: PostitColorEnum.GREEN,
    },
    {
      id: 2,
      title: 'Titulo do post 2',
      annotation: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, itaque! Consectetur dolores praesentium reprehender',
      color: PostitColorEnum.YELLOW,
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

  constructor(private readonly http: HttpAsyncService) {
    this.http.get(apiRoutes.notes.me).then(console.log);
  }

  ngOnInit() {
  }

}
