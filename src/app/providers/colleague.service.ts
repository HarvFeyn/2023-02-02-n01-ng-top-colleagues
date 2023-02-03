import { Injectable } from '@angular/core';
import {Colleague} from "../models/colleague";

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {
  constructor() {}
  list(): Colleague[] {
    return [{
      pseudo:"VINCENT1",
      photo:"https://iili.io/Hc70A5G.png",
      score:100
    },{
      pseudo:"VINCENT2",
      photo:"https://iili.io/Hc70A5G.png",
      score:100
    },{
      pseudo:"VINCENT3",
      photo:"https://iili.io/Hc70A5G.png",
      score:100
    },];
  }
}
