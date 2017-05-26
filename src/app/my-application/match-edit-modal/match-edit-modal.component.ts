import {Component, Input, OnInit} from '@angular/core';
import { ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal/modal.component';
import {ApiObservableService} from '../api-observable.service';
import {Match} from '../classes/match';
import {Team_Match} from '../classes/team_match';
import {Team_Group} from '../classes/team_group';
import {Group} from '../classes/group';
import {Team} from '../classes/team';

@Component({
  selector: 'app-match-edit-modal',
  templateUrl: './match-edit-modal.component.html',
  styleUrls: ['./match-edit-modal.component.scss']
})
export class MatchEditModalComponent implements OnInit {


  public errorMessage: string;

  @Input() groupId;
  @Input() match: Match;
  @Input() team: Team[];
  group: Group;
  team_match: Team_Match[];
  team_group: Team_Group[];

  constructor(private apiService: ApiObservableService) { }

  ngOnInit() {

    //team A
    this.getTeamMatch(0);
    this.getTeamGroup(0);
    //team B
    this.getTeamMatch(1);
    this.getTeamGroup(1);

  }

  getTeamMatch(index: number) {
    const teamId: string = this.team[index].id.toString();
    const matchId: string = this.match.id.toString();


    this.apiService.getTeamMatch(teamId, matchId)
      .subscribe(
        matches => {
          return this.team_match[index] = matches;
        },
        error =>  this.errorMessage = <any>error);
  }

  getTeamGroup(index: number) {
    const teamId: string = this.team[index].id.toString();
    const groupId: string = this.groupId.toString();


    this.apiService.getTeamGroup(teamId, groupId)
      .subscribe(
        matches => {
          return this.team_group[index] = matches;
        },
        error =>  this.errorMessage = <any>error);
  }
}
