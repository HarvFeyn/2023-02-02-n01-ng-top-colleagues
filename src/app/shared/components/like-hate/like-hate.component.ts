import {Component, EventEmitter} from '@angular/core';
import {LikeHate} from "../../../models/like-hate";

@Component({
  selector: 'tc-like-hate',
  templateUrl: './like-hate.component.html',
  styleUrls: ['./like-hate.component.scss']
})
export class LikeHateComponent {

  clickLike() {
    change:EventEmitter<string> = new EventEmitter<string>();
    console.log(LikeHate.LIKE);
  }
  clickHate() {
    console.log(LikeHate.HATE);
  }
}
