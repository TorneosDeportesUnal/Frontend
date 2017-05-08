import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ApiObservableService} from '../api-observable.service';
import {Team} from '../classes/team';
import {TournamentService} from '../services/tournament.service';


@Component({
  selector: 'app-team-creation',
  templateUrl: './team-creation.component.html',
  styleUrls: ['./team-creation.component.scss']
})
export class TeamCreationComponent implements OnInit {

  public errorMessage: string;
  public tournaments: any;
  public popUp: boolean = false;
  public textPopUp: string;

  team: Team;

  public form = this.fb.group({

    name: ['', Validators.required],
    delegate: ['', Validators.required],
    captain: ['', Validators.required],
    tournament: ['', Validators.required ],
    uniform_color: ['', Validators.required]


  });


  constructor(public fb: FormBuilder, private apiService: ApiObservableService, private tournamentService: TournamentService) {
  }

  ngOnInit() {
    this.tournamentService.getTournaments()
      .subscribe( tournaments => {
        this.tournaments = tournaments;
      });
  }

  reset() {
    this.form.reset();
  }

  createTeam(event) {
    const formModel = this.form.value;

    const saveElem: Team = {
      id: null,
      tournament_id: formModel.tournament as number,
      name: formModel.name as string,
      coach_name: null,
      captain: formModel.captain as string,
      uniform_color: formModel.uniform_color as string,
      goals_against: null,
      goals_in_favor: null,
      goals_difference: null,
      games_played: null,
      wins: null,
      loses: null,
      draws: null
    };

    this.changePopUp();
    this.add(saveElem);
  }

  changePopUp() {
    this.popUp = !this.popUp;
  }

  add(team: Team) {

    this.apiService.createTeam(team)
      .subscribe( (data: any) => {
          this.textPopUp = data;
        },
        error => {
          this.textPopUp = error + 'AQUIIII';
        },
            () => console.log('Lo intente')
        );
  }


}
