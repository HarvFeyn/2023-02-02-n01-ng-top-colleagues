import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ColleagueService} from "./colleague.service";
import {Subject} from "rxjs";
import {Vote} from "../models/vote";
import {Colleague} from "../models/colleague";

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  private voteList:Vote[] = []
  private URL_API_LIST = 'https://dev.cleverapps.io/api/v2/votes';
  private URL_API_POST = 'https://dev.cleverapps.io/api/v2/votes';
  private subjectVote:Subject<Vote> = new Subject<Vote>();

  constructor(private http:HttpClient,private colleagueService:ColleagueService) {}
  getSubjectAsObs(){
    return this.subjectVote.asObservable();
  }

  getVotesAPI(){
    return this.http.get<Vote[]>(this.URL_API_LIST);
  }

  getVote() {
    return this.voteList;
  }

  setVoteList(value: Vote[]) {
    this.voteList = value;
  }

  addVote(vote:Vote) {
    this.voteList.push(vote);
    this.http.post(this.URL_API_POST, {'like_hate':vote.vote, 'pseudo':vote.colleague.pseudo}).subscribe(()=>{
      this.getVotesAPI().subscribe(value => {
        this.voteList = value;
      });
      this.colleagueService.getCollegueApi().subscribe(value => {
        this.colleagueService.setCollegueList(value);
      });

    });
  }
}
