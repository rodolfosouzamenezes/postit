import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent {
  @Input()
  public src = '';

  @Input()
  public full = false;

  @Output()
  public clicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  public sendEvent(): void {
    this.clicked.emit(true);
  }
}
