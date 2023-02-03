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
  @Input() colleagueList:Colleague[] = [{
    pseudo:"test1",
    score:100,
    photo:"https://picsum.photos/200/300"
  },{
    pseudo:"test2",
    score:100,
    photo:"https://picsum.photos/200/301"
  },{
    pseudo:"test3",
    score:100,
    photo:"https://picsum.photos/200/302"
  },{
    pseudo:"test4",
    score:100,
    photo:"https://picsum.photos/200/303"
  },{
    pseudo:"test5",
    score:100,
    photo:"https://picsum.photos/200/304"
  },{
    pseudo:"test6",
    score:100,
    photo:"https://picsum.photos/200/305"
  }];

  traiterVote(vote:Vote) {
    this.objectVote.emit(vote);
  }
}
