import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Colleague} from "../../../models/colleague";
import {LikeHate} from "../../../models/like-hate";
import {Vote} from "../../../models/vote";

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent {
  @Input() colleague:Colleague = {
    pseudo:"test",
    score:100,
    photo:"https://picsum.photos/200/300"
  };

  @Output() objectVote:EventEmitter<Vote> = new EventEmitter<Vote>();

  traiterLikeHate(likehate:string) {
    if(likehate == "LIKE" && this.colleague.score < 1000) {
      this.colleague.score = this.colleague.score + 100;
      this.objectVote.emit({vote:LikeHate.LIKE,colleague:this.colleague})
    } else if(likehate == "HATE" && this.colleague.score > -1000) {
      this.colleague.score = this.colleague.score - 100;
      this.objectVote.emit({vote:LikeHate.HATE,colleague:this.colleague})
    }
  }
}
