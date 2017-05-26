import { Component, OnInit } from '@angular/core';
import {ApiObservableService} from '../api-observable.service';
import {Http} from '@angular/http';
import {Match} from '../classes/match';
import {Group} from '../classes/group';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss']
})
export class MatchListComponent implements OnInit {

  public matches: Match[];
  groups: Group[];

  public errorMessage: string;
  constructor(private apiService: ApiObservableService) { }

  ngOnInit() {
    this.getMatchesByGroupId();
    console.log("blah");
  }

  getMatchesByGroupId() {
    const id: string = '1';
    this.apiService.getMatchesByGroupId(id)
      .subscribe(
        matches => {
          return this.matches = matches;
        },
        error =>  this.errorMessage = <any>error);
  }

}
