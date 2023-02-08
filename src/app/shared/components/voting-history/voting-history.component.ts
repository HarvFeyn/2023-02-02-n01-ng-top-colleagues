import {Component, Input} from '@angular/core';
import {Vote} from "../../../models/vote";
import {LikeHate} from "../../../models/like-hate";
import {VoteService} from "../../../providers/vote.service";

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent {

  private voteList:Array<Vote> = [];

  constructor(private voteService:VoteService) {
    this.voteService.getVotesAPI().subscribe(value => {
      this.voteService.setVoteList(value);
    })
  }

  getVotes(){
    return this.voteService.getVote();
  }

  supp(i:number) {
    this.voteList.splice(i,1)
  }
}
