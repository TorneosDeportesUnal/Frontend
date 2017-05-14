import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {ApiObservableService} from '../api-observable.service';

//to recive params of url in angular
import { ActivatedRoute, Router, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {TournamentService} from '../services/tournament.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './tournament-view.component.html',
  styleUrls: ['./tournament-view.component.scss']
})
export class TournamentViewComponent implements OnInit {

  public data;
  public filterQuery = '';
  public tournament: any;

  //read parameters
  id: string;
  private sub: any;

  constructor(private http: Http,
              private apiService: ApiObservableService,
              private route: ActivatedRoute,
              private tournamentService: TournamentService,
              private router: Router) {}

  ngOnInit(): void {

    console.log('hola julian');

    this.getTeams();
    this.getDetailsTournament();
    console.log(this.data);
  }

  public toInt(num: string) {
    return +num;
  }

  public sortByWordLength = (a: any) => {
    return a.name.length;
  }

  getDetailsTournament(){
    this.route.params
    // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.tournamentService.getTournamentById(params['id'])).subscribe(
      tournamentDetails =>  {this.tournament = tournamentDetails; },
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

  goToCreateTeam(event){
    console.log('HOLA JULI goToCreateTeam', event);
    this.router.navigate(["/players/team"]);
  }
}

