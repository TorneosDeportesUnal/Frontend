import { Component, OnInit } from '@angular/core';
import {ApiObservableService} from '../api-observable.service';
import {Group} from 'app/my-application/classes/group';

@Component({
  selector: 'app-groups-match-list',
  templateUrl: './groups-match-list.component.html',
  styleUrls: ['./groups-match-list.component.scss']
})
export class GroupsMatchListComponent implements OnInit {

  public errorMessage: string;
  groups: Group[];

  constructor(private apiService: ApiObservableService) { }

  ngOnInit() {
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

}
