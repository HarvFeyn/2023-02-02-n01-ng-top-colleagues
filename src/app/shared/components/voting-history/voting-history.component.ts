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
  @Input() voteList:Vote[] = [{
    colleague:{
      pseudo:"test1",
      score:100,
      photo:"https://picsum.photos/200/300"
    },
    vote:LikeHate.HATE
  }, {
      colleague:{
        pseudo:"test2",
        score:100,
        photo:"https://picsum.photos/200/301"
      },
      vote:LikeHate.LIKE
  }, {
      colleague:{
        pseudo:"test3",
        score:100,
        photo:"https://picsum.photos/200/302"
      },
      vote:LikeHate.HATE
  }, {
      colleague:{
        pseudo:"test4",
        score:100,
        photo:"https://picsum.photos/200/303"
      },
      vote:LikeHate.LIKE
  }];

  supp(i:number) {
    this.voteList.splice(i,1)
  }
}
