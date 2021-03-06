import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ApiObservableService} from '../api-observable.service';
import {Team} from '../classes/team';
import {TournamentService} from '../services/tournament.service';
import {Router} from '@angular/router';


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

    id: ['', Validators.required],
    tournament_id: ['', Validators.required],
    name: ['', Validators.required],
    coach_name: ['', Validators.required],
    captain: ['', Validators.required],
    delegate: ['', Validators.required],
    uniform_color: ['', Validators.required],
    goals_against: ['', Validators.required],
    goals_in_favor: ['', Validators.required],
    goals_difference: ['', Validators.required],
    wins: ['', Validators.required],
    loses: ['', Validators.required],
    draws: ['', Validators.required]
  });


  constructor(public fb: FormBuilder,
              private apiService: ApiObservableService,
              private tournamentService: TournamentService,
              private router: Router) {
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
      tournament_id: formModel.tournament_id as number,
      name: formModel.name as string,
      coach_name: formModel.coach_name as string,
      captain: formModel.captain as string,
      delegate: formModel.delegate as string,
      uniform_color: formModel.uniform_color as string,
      goals_against: null,
      goals_in_favor: null,
      goals_difference: null,
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
      .subscribe(
        () => { this.router.navigate( ['/players/teams-by-tournament', team.tournament_id] );
        }
        ,
        error => {
          this.textPopUp = error + 'AQUIIII';
        },
            () => console.log('Lo intente')
        );
  }


}
