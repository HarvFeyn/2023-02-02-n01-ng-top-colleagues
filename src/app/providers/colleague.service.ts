import { Injectable } from '@angular/core';
import {Colleague} from "../models/colleague";
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {ColleagueDetails} from "../models/colleagueDetails";

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {

  private URL_API_LIST = 'https://dev.cleverapps.io/api/v2/colleagues';
  private colleagueList:Array<Colleague> = [];

  private subjectColleague:Subject<Colleague> = new Subject<Colleague>();
  constructor(private http:HttpClient) {}
  getSubjectAsObs(){
    return this.subjectColleague.asObservable();
  }

  getCollegueApi():Observable<Colleague[]>{
    return this.http.get<Colleague[]>(this.URL_API_LIST);
  }

  getOneCollegueApi(pseudo:string):Observable<ColleagueDetails>{
    return this.http.get<ColleagueDetails>(this.URL_API_LIST.concat('/').concat(pseudo));
  }

  getCollegues(){
    return this.colleagueList;
  }


  setCollegueList(value: Colleague[]) {
    this.colleagueList = value;
  }
}
