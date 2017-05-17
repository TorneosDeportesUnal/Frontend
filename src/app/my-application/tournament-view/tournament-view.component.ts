import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {ApiObservableService} from '../api-observable.service';

//to recive params of url in angular
import { ActivatedRoute, Router, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {TournamentService} from '../services/tournament.service';
import {Tournament} from '../classes/tournament';
import {isNullOrUndefined, isUndefined} from 'util';

@Component({
  selector: 'app-player-list',
  templateUrl: './tournament-view.component.html',
  styleUrls: ['./tournament-view.component.scss']
})
export class TournamentViewComponent implements OnInit {

  public data;
  public filterQuery = '';
  public tournament: any;

  // read parameters
  id: string;
  private sub: any;

  constructor(private http: Http,
              private apiService: ApiObservableService,
              private route: ActivatedRoute,
              private tournamentService: TournamentService,
              private router: Router) {}

  ngOnInit() {
    this.getTeams();
    this.getDetailsTournament();
  }

  public toInt(num: string) {
    return +num;
  }

  public sortByWordLength = (a: any) => {
    return a.name.length;
  }

  getDetailsTournament() {
    this.route.params
      // (+) converts string 'id' to a number
        .flatMap( (params: Params) => this.tournamentService.getTournamentById(params['id']))
        .subscribe( tournamentDetails => {
          if (!isNullOrUndefined(tournamentDetails)) {
            this.tournament = tournamentDetails;
            this.tournamentService.setCurrentTournament(this.tournament);
            console.log('debug tourdetails', tournamentDetails);
          }
          },
          error => console.log(error)
        );
  }

  getTeams() {
   this.route.params
      // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.apiService.getTeamsByTournamentId(params['id'])).subscribe(
      teamsList =>  {this.data = teamsList; },
      error => console.log(error)
    );
  }
}

