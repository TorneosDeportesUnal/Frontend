import {Component, group, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {ApiObservableService} from '../api-observable.service';
import {TournamentPhase} from '../classes/tournament_phase';
import {Team} from '../classes/team';
import {Group} from '../classes/group';



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
  groups: Group[];

  public errorMessage: string;

  public form = this.fb.group({

    phase_number: ['', Validators.required],
    phase_type: ['', Validators.required],
    group_number: ['', Validators.required]


  });


  constructor(public fb: FormBuilder, private apiService: ApiObservableService ) {}

  getRandomInt(min, max): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  sortTeamsInGroups() {

    this.groups = new Array(this.form.value.group_number);
    console.log(this.groups.length);
    let teams_copy: Team[] = this.teams.slice(0);
    let iterator = 0;
    for (let i = 0; i < this.form.value.group_number; i++) {

      let ids: number[] = new Array();
      for (let num = 0; num < this.groupArr_num[iterator]; num++) {

        console.log(this.groupArr_num[iterator]);
        const rand = this.getRandomInt(0, teams_copy.length - 1);
        const temp: Team[] = teams_copy.splice(rand, 1);
        console.log(temp[0].id);
        ids.push( temp[0].id ) ;

      }
      let toAdd: Group = {
        //id: null,
        active: true,
        winners_number: 1,
        name: iterator.toString() as string,
        //tournament_phase_id: null,
        team_ids: ids

      };

      this.groups[i] = toAdd;

      console.log(this.groups[i]);
      iterator++;
    }
  }
  onSubmit(event) {


    console.log(event);
    this.phase = this.prepareSave();
    console.log(this.phase);
    this.add(this.phase);
    //
    // console.log(this.teams);
    // console.log(this.teams[1].id);




  }

  reset() {
    this.form.reset();
  }

  prepareSave(): TournamentPhase {
    const formModel = this.form.value;

    const saveElem: TournamentPhase = {

      id: null,
      tournament_id: 1,
      phase_number : formModel.phase_number as number,
      phase_type: formModel.phase_type as string,
      active: true,
      groups_attributes: this.groups

    };
    return saveElem;
  }


  add(phase: TournamentPhase) {

    this.apiService.createTournamentPhase(phase)
      .subscribe(error =>  this.errorMessage = <any>error);
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
