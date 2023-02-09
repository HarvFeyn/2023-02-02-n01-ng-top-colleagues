import { Component } from '@angular/core';
import {ColleagueService} from "../../providers/colleague.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Colleague} from "../../models/colleague";
import {ColleagueDetails} from "../../models/colleagueDetails";

@Component({
  selector: 'tc-details-colleague',
  templateUrl: './details-colleague.page.html',
  styleUrls: ['./details-colleague.page.scss']
})
export class DetailsColleaguePage {

  oneColleague?:ColleagueDetails

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private colleagueService:ColleagueService) {

    this.activatedRoute.paramMap
      .subscribe(paramMap => {
        const pseudo = paramMap.get("pseudo")
        if(pseudo) {
          this.colleagueService.getOneCollegueApi(pseudo).subscribe(value => {
            this.oneColleague = value;
          })
        }
      });
  }

}
