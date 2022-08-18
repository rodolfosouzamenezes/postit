import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PostitModalComponent } from 'src/app/modals/postit-modal/postit-modal.component';
import { PostitColorEnum } from 'src/app/models/enums/postit-color.enum';
import { PostitProxy } from 'src/app/models/proxies/postit.proxy';
import { NoteService } from 'src/app/modules/http-async/service/note.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  public isLoading: boolean = false;

  public postitArray: PostitProxy[] = [];

  public postitColorEnum: typeof PostitColorEnum = PostitColorEnum;

  constructor(
    private readonly modalController: ModalController,
    private readonly note: NoteService,
    private readonly helper: HelperService,
  ) {}

  public async ngOnInit(): Promise<void> {
    await this.loadMyNotes();
  }

  public async loadMyNotes(): Promise<void> {
    this.isLoading = true;
    const [notes, errorMessage] = await this.note.getMyNotes();
    this.isLoading = false;

    if (errorMessage) {return this.helper.showToast(errorMessage, 5_000);}

    this.postitArray = notes;
  }

  public async openNewPostitModal(color: string): Promise<void> {
    const modal = await this.modalController.create({
      component: PostitModalComponent,
      cssClass: 'background-modal',
      componentProps: {
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

    modal.onDidDismiss().then(async ({ data }) => {
      if(data.isDeleted) {
        this.postitArray = this.postitArray.filter(post => post.id !== data.postit.id);
      };
    });
  }
}
