import {Component, Input} from '@angular/core';
import {Colleague} from "../../../models/colleague";

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent {
  @Input() colleagueList:Colleague[] = [{
    pseudo:"test1",
    score:100,
    photo:"https://picsum.photos/200/300"
  },{
    pseudo:"test2",
    score:100,
    photo:"https://picsum.photos/200/300"
  }];
}
