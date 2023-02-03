import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LikeHate} from "../../../models/like-hate";

@Component({
  selector: 'tc-like-hate',
  templateUrl: './like-hate.component.html',
  styleUrls: ['./like-hate.component.scss']
})
export class LikeHateComponent {

  @Input() score:number = 0;
  @Output() likehate:EventEmitter<string> = new EventEmitter<string>();

  clickLike() {
    this.likehate.emit(LikeHate.LIKE)
  }
  clickHate() {
    this.likehate.emit(LikeHate.HATE)
  }
}
