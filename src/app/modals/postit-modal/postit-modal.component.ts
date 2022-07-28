import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PostitColorEnum } from 'src/app/models/enums/postit-color.enum';
import { PostitPayload } from 'src/app/models/payloads/postit.payload';

@Component({
  selector: 'app-postit-modal',
  templateUrl: './postit-modal.component.html',
  styleUrls: ['./postit-modal.component.scss'],
})
export class PostitModalComponent implements OnInit {
  @Input()
  public color: PostitColorEnum;

  @Input()
  public create = false;

  @Input()
  public postit: PostitPayload = {
    id: 6,
    title: '',
    annotation: '',
    color: PostitColorEnum.BLUE,
  };

  constructor(
    private readonly modalController: ModalController,
  ) { }

  ngOnInit() {
    if (!this.color) {
      this.color = this.postit.color;
    }
  }

  public savePostit(): void {
    this.postit.color = this.color;
    this.modalController.dismiss(this.postit);
  }

  public deletePostit(): void {
    this.modalController.dismiss({ postit: this.postit, isDeleted: true });

  }

  public closeModal(): void {
    this.modalController.dismiss({ postit: this.postit, isDeleted: false });
  }
}
