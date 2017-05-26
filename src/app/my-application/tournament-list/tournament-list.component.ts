import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {ApiObservableService} from '../api-observable.service';
import {TournamentService} from '../services/tournament.service';
import {Tournament} from '../classes/tournament';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-tournament-list',
  templateUrl: './tournament-list.component.html',
  styleUrls: ['./tournament-list.component.scss']
})

export class TournamentListComponent implements OnInit {


  public data;
  public filterQuery = '';
  // pop-up update tournament
  public selectedTournament: Tournament;
  public showPlayer: boolean = false;

  // pop-up delete tournament

  public showDelete: boolean = false;

  constructor(private http: Http,
              private apiService: ApiObservableService,
              private route: ActivatedRoute,
              private router: Router,
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

  goToCreateTournament(event) {
    console.log('DEBUG | goToCreateTournament()', event);
    this.router.navigate(['/players/tournament-creation']);
  }

  deleteTournament(id_tournament: number) {
    this.tournamentService.deleteTournament(id_tournament).subscribe(
      () => { console.log('success deletePlayer');
        window.location.reload(); },
      () => { console.log('error deletePlayer'); }
    );
  }

  // metodos pop-up update tournament

  openTournament(tournament) {
    this.selectedTournament = tournament;
    this.changeStatePopUp(true);
  }

  changeStatePopUp(value) {
    this.showPlayer = value;
  }

  // metodos pop-up delete tournament

  openTournamentDelete(tournament) {
      this.selectedTournament = tournament;
      this.changeStatePopUpDelete(true);
  }
  changeStatePopUpDelete(value) {
    this.showDelete = value;
  }

}
