import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {ApiObservableService} from '../api-observable.service';
import {TournamentService} from "../services/tournament.service";

@Component({
  selector: 'app-tournament-list',
  templateUrl: './tournament-list.component.html',
  styleUrls: ['./tournament-list.component.scss']
})

export class TournamentListComponent implements OnInit {


  public data;
  public filterQuery = '';

  constructor(private http: Http,
              private apiService: ApiObservableService,
              private tournamentService: TournamentService) {

  }

  ngOnInit(): void {
    this.getTournaments();
    console.log(this.data);
  }

  public toInt(num: string) {
    return +num;
  }

  public sortByWordLength = (a: any) => {
    return a.name.length;
  }

  getTournaments() {
    this.apiService.getTournaments().subscribe(
      tournamentList =>  {this.data = tournamentList},
      error => console.log(error)
    );
  }

  deleteTournament(id_tournament: number) {
    this.tournamentService.deleteTournament(id_tournament).subscribe(
      () => { console.log('success deletePlayer');
        window.location.reload(); },
      () => { console.log('error deletePlayer'); }
    );
  }
}
