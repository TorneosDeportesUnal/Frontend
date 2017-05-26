import { Component, OnInit } from '@angular/core';
import {ApiObservableService} from '../api-observable.service';
import {Group} from '../classes/group';
import {Team} from '../classes/team';

@Component({
  selector: 'app-groups-team-list',
  templateUrl: './groups-team-list.component.html',
  styleUrls: ['./groups-team-list.component.scss']
})
export class GroupsTeamListComponent implements OnInit {

  public errorMessage: string;
  groups: Group[];
  teams: Team[];

  constructor(private apiService: ApiObservableService) { }

  ngOnInit( ) {

    this.getGroups();

  }

  getGroups() {
    const id: string = '1';

    this.apiService.getGroupsByTournamentId(id)
      .subscribe(
        groups => {
          return this.groups = groups;
        },
        error =>  this.errorMessage = <any>error);


  }

  getTeamsByGroup(id: string) {

    this.apiService.getTeamsByGroupId(id)
      .subscribe(
        teamsByGroup => {
          return this.teams = teamsByGroup;
        },
        error =>  this.errorMessage = <any>error);


  }

}
