import {Component, EventEmitter, Output} from '@angular/core';
import {Vote} from "../../models/vote";
import {LikeHate} from "../../models/like-hate";
import {ServiceApi} from "../../service/ServiceApi";
import {Colleague} from "../../models/colleague";

@Component({
  selector: 'tc-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss']
})
export class WelcomePage {
  private serviceApi = new ServiceApi();
  public listColleague:Colleague[] = [];
  public voteList:Vote[] = [];

  constructor() {
    this.refresh();
  }

  traiterVote(vote:Vote) {
    this.voteList.push(vote);
  }

  async refresh() {
    this.listColleague = await this.serviceApi.returnData();
  }
}
