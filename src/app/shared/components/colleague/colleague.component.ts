import {Component, Input} from '@angular/core';
import {Colleague} from "../../../models/colleague";

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

  traiterLikeHate(likehate:string) {
    if(likehate == "LIKE") {
      this.colleague.score = this.colleague.score + 100;
    } else if(likehate == "HATE") {
      this.colleague.score = this.colleague.score - 100;
    }
  }
}
