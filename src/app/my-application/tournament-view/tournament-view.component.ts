import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {ApiObservableService} from '../api-observable.service';


@Component({
  selector: 'app-player-list',
  templateUrl: './tournament-view.component.html',
  styleUrls: ['./tournament-view.component.scss']
})
export class TournamentViewComponent implements OnInit {

  public data;
  public filterQuery = '';

  constructor(private http: Http,
              private apiService: ApiObservableService ) {}

  ngOnInit(): void {
    this.getTeams();
    console.log(this.data);
  }

  public toInt(num: string) {
    return +num;
  }

  public sortByWordLength = (a: any) => {
    return a.name.length;
  }

  getTeams() {
    this.apiService.getTeamsByTournamentId('1').subscribe(
      teamsList =>  {this.data = teamsList},
      error => console.log(error)
    );
  }
}

