import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {ApiObservableService} from '../api-observable.service';
import {Team} from '../classes/team';


@Component({
  selector: 'app-team-creation',
  templateUrl: './team-creation.component.html',
  styleUrls: ['./team-creation.component.scss']
})
export class TeamCreationComponent implements OnInit {

  public errorMessage: string;

  team: Team;

  public form = this.fb.group({

    name: ['', Validators.required],
    delegate: ['', Validators.required],
    captain: ['', Validators.required],
    uniform_color: ['', Validators.required]


  });


  constructor(public fb: FormBuilder, private apiService: ApiObservableService ) {}


  onSubmit(event) {

    console.log(event);
    this.team = this.prepareSave();
    console.log(this.team);
    this.add(this.team);


  }

  reset() {
    this.form.reset();
  }

  prepareSave(): Team {
    const formModel = this.form.value;

    const saveElem: Team = {
      id: null,
      tournament_id: 1,
      name: formModel.name as string,
      delegate: formModel.delegate as string,
      captain: formModel.captain as string,
      uniform_color: formModel.uniform_color as string,
      draws: null,
      wins: null,
      loses: null,
      games_played: null,
      goals_against: null,
      goals_difference: null,
      goals_in_favor: null
    };
    return saveElem;
  }


  add(team: Team) {

    this.apiService.createTeam(team)
      .subscribe(error =>  this.errorMessage = <any>error);
  }


  ngOnInit() {
  }

}
