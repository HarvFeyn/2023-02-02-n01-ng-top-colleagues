import {Component, Input} from '@angular/core';
import {Vote} from "../../../models/vote";
import {LikeHate} from "../../../models/like-hate";

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent {

  public data:Vote[] = [];
  @Input() voteList:Vote[] = [];

  supp(i:number) {
    this.voteList.splice(i,1)
  }
}
