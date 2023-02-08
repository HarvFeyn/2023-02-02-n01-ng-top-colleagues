import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Colleague} from "../../../models/colleague";
import {Vote} from "../../../models/vote";
import {ColleagueService} from "../../../providers/colleague.service";
import {Subject} from "rxjs";

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent {
  private subject1:Subject<Colleague[]> = new Subject<Colleague[]>();
  constructor(private colleagueService:ColleagueService) {
    this.colleagueService.getCollegueApi().subscribe(value => {
      this.colleagueService.setCollegueList(value);
    })
  }
  @Output() objectVote:EventEmitter<Vote> = new EventEmitter<Vote>();
  @Input() colleagueList:Colleague[] = [];

  traiterVote(vote:Vote) {
    const cloneVote = structuredClone(vote);
    this.objectVote.emit(cloneVote);
  }

  getColleagueList():Colleague[]{
    return this.colleagueService.getCollegues();
  }
}
