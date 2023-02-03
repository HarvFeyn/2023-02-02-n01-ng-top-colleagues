import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Colleague} from "../../../models/colleague";
import {Vote} from "../../../models/vote";

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent {
  @Output() objectVote:EventEmitter<Vote> = new EventEmitter<Vote>();
  @Input() colleagueList:Colleague[] = [];

  traiterVote(vote:Vote) {
    const cloneVote = structuredClone(vote);
    this.objectVote.emit(cloneVote);
  }
}
