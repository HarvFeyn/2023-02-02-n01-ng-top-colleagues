import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Colleague} from "../../../models/colleague";
import {Vote} from "../../../models/vote";
import {ColleagueService} from "../../../providers/colleague.service";

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent implements OnInit {
  constructor(private colleagueService:ColleagueService) {
  }
  @Output() objectVote:EventEmitter<Vote> = new EventEmitter<Vote>();
  @Input() colleagueList:Colleague[] = [];

  traiterVote(vote:Vote) {
    const cloneVote = structuredClone(vote);
    this.objectVote.emit(cloneVote);
  }
  ngOnInit() {
    this.colleagueList = this.colleagueService.list();
  }
}
