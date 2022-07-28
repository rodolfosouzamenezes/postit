import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PostitModalComponent } from 'src/app/modals/postit-modal/postit-modal.component';
import { PostitColorEnum } from 'src/app/models/enums/postit-color.enum';
import { PostitProxy } from 'src/app/models/proxies/postit.proxy';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public postitArray: PostitProxy[] = [
    {
      id: 0,
      title: 'Titulo do post 0',
      annotation: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, itaque! Consectetur dolores praesentium reprehender',
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

  public postitColorEnum: typeof PostitColorEnum = PostitColorEnum;

  constructor(
    public modalController: ModalController,
  ) { }

  ngOnInit() {
  }

  public logColor(color: string): void {
    console.log(color);
  }

  public printPostit(event: PostitProxy): void {
    console.log(event);
  }

  public async openNewPostitModal(color: string): Promise<void> {
    const modal = await this.modalController.create({
      component: PostitModalComponent,
      cssClass: 'background-modal',
      componentProps: {
        color,
        create: true
      }
    });

    await modal.present();

    modal.onDidDismiss().then(async ({ data: postit }) => {
      if (postit) {
        this.postitArray.push(postit);
      }
    });
  }

  public async openPostitModal(postit: PostitProxy): Promise<void> {
    const modal = await this.modalController.create({
      component: PostitModalComponent,
      cssClass: 'background-modal',
      componentProps: {
        postit
      }
    });

    await modal.present();

    modal.onDidDismiss().then(async ({ data: postit }) => {

    });
  }
}
