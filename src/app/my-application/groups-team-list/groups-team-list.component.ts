import { Component, OnInit } from '@angular/core';
import {ApiObservableService} from '../api-observable.service';
import {Group} from '../classes/group';
import {Team} from '../classes/team';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-groups-team-list',
  templateUrl: './groups-team-list.component.html',
  styleUrls: ['./groups-team-list.component.scss']
})
export class GroupsTeamListComponent implements OnInit {

  public errorMessage: string;
  groups: Group[];
  teams: Team[];

  constructor(private apiService: ApiObservableService,
              private route: ActivatedRoute) { }

  ngOnInit( ) {

    this.getGroups();

  }

  getGroups() {
    // const id: string = '1';
    this.route.params
      .flatMap( (params: Params) => this.apiService.getGroupsByTournamentId(params['id']))
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
