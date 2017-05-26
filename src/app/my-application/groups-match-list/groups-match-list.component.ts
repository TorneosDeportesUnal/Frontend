import { Component, OnInit } from '@angular/core';
import {ApiObservableService} from '../api-observable.service';
import {Group} from 'app/my-application/classes/group';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-groups-match-list',
  templateUrl: './groups-match-list.component.html',
  styleUrls: ['./groups-match-list.component.scss']
})
export class GroupsMatchListComponent implements OnInit {

  public errorMessage: string;
  groups: Group[];

  public id_tournament: string;

  constructor(private apiService: ApiObservableService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getGroups();
  }

  getGroups() {
    const id: string = '2';

    this.route.params
    // (+) converts string 'id' to a number
      .flatMap( (params: Params) => this.apiService.getGroupsByTournamentId(params['id']))
      .subscribe(
        groups => {
          return this.groups = groups;
        },
        error =>  this.errorMessage = <any>error);


  }

}
