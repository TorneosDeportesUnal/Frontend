import {Component, Input, OnInit} from '@angular/core';
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

  @Input() groupId;

  public matches: Match[];



  public errorMessage: string;
  constructor(private apiService: ApiObservableService) { }

  ngOnInit() {
    this.getMatchesByGroupId();
    console.log("blah");
  }

  getMatchesByGroupId() {
    const id: string = this.groupId.toString();
    this.apiService.getMatchesByGroupId(id)
      .subscribe(
        matches => {
          return this.matches = matches;
        },
        error =>  this.errorMessage = <any>error);
  }

}
