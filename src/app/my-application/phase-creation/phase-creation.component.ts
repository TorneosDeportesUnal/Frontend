import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {ApiObservableService} from '../api-observable.service';
import {TournamentPhase} from '../classes/tournament_phase';
import {Team} from '../classes/team';



@Component({
  selector: 'app-phase-creation',
  templateUrl: './phase-creation.component.html',
  styleUrls: ['./phase-creation.component.scss']
})
export class PhaseCreationComponent implements OnInit {

  phase: TournamentPhase;
  // let groupNumber: number;
  groupArr_num  = Array;

  public teams: Team[];

  public errorMessage: string;

  public form = this.fb.group({

    phase_number: ['', Validators.required],
    phase_type: ['', Validators.required],
    group_number: ['', Validators.required]


  });


  constructor(public fb: FormBuilder, private apiService: ApiObservableService ) {}


  onSubmit(event) {

    console.log(event);
    this.phase = this.prepareSave();
    console.log(this.phase);
    this.add(this.phase);

    console.log(this.teams);
    console.log(this.teams[11].id);
    this.teams.splice(11, 1);
    console.log(this.teams);
    console.log(this.teams[11].id);




  }

  reset() {
    this.form.reset();
  }

  prepareSave(): TournamentPhase {
    const formModel = this.form.value;

    const saveElem: TournamentPhase = {

      id: null,
      tournament_id: 11,
      phase_number : formModel.phase_number as number,
      phase_type: formModel.phase_type as string,
      active: true

    };
    return saveElem;
  }


  add(phase: TournamentPhase) {

    // this.apiService.createTournamentPhase(phase)
    //   .subscribe(error =>  this.errorMessage = <any>error);
  }

  getTeams() {
    this.apiService.getTeams()
      .subscribe(
        teams => {
          return this.teams = teams;
        },
        error =>  this.errorMessage = <any>error);

    // this.apiService.getTeams().subscribe(
    //   playerList =>  {this.teams = playerList; } ,
    //   error => console.log(error)
    // );
  }


  ngOnInit() {
    this.getTeams();
    console.log(this.teams);
  }

}
