import {Component, group, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiObservableService} from '../api-observable.service';
import {TournamentPhase} from '../classes/tournament_phase';
import {Team} from '../classes/team';
import {Group} from '../classes/group';
import {TournamentService} from '../services/tournament.service';
import {getTemplate} from 'codelyzer/util/ngQuery';
import {Router} from '@angular/router';




@Component({
  selector: 'app-phase-creation',
  templateUrl: './phase-creation.component.html',
  styleUrls: ['./phase-creation.component.scss']
})
export class PhaseCreationComponent implements OnInit {

  public tournaments: any;

  phase: TournamentPhase;
  groupArr_num  = Array;

  public teams: Team[];
  groups: Group[];

  public errorMessage: string;

  public sortedFlag: boolean = false;

  public form = this.fb.group({

    phase_number: ['', Validators.required],
    phase_type: ['', Validators.required],
    group_number: ['', Validators.required],
    tournament_id: ['', Validators.required]


  });

  public id_tournament: number;
  public id_phase: number;

  constructor(public fb: FormBuilder,
              private tournamentService: TournamentService,
              private apiService: ApiObservableService,
              private router: Router) {}

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
        id: null,
        active: true,
        winners_number: 1,
        name: iterator.toString() as string,
        // tournament_phase_id: null,
        team_ids: ids,
        teams: null

      };

      this.groups[i] = toAdd;

      console.log(this.groups[i]);
      iterator++;
    }

    if (this.groups.length > 0) {
      this.sortedFlag = true;
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

    console.log('este es el id del torneo : ' + this.id_tournament);
    this.router.navigate( ['players/group-list', this.id_tournament] );



  }

  reset() {
    this.form.reset();
  }

  prepareSave(): TournamentPhase {
    const formModel = this.form.value;

    const saveElem: TournamentPhase = {

      id: null,
      tournament_id: formModel.tournament_id as number ,
      phase_number : formModel.phase_number as number,
      phase_type: formModel.phase_type as string,
      active: true,
      groups_attributes: this.groups

    };

    this.id_tournament = formModel.tournament_id as number;
    console.log('holaaaaaaaaaaaaa' + this.id_tournament);

    return saveElem;
  }


  add(phase: TournamentPhase) {

    this.apiService.createTournamentPhase(phase)
      .subscribe(
        (data) => {
          console.log('creacion exitosa phase , toma tu id' + data['id']);
          this.id_phase = data['id'];
          // this.createMatches(this.id_phase.toString());
        },
        (error) => {
          this.errorMessage = <any>error;
          console.log('error create phase' + this.errorMessage);
        }
      );
  }

  getTeams() {
    const id: string = this.form.value.tournament_id.toString();
    this.apiService.getTeamsByTournamentId(id)
      .subscribe(
        teams => {
          return this.teams = teams;
        },
        error =>  this.errorMessage = <any>error);
  }


  ngOnInit() {


    this.tournamentService.getTournaments()
      .subscribe( tournaments => {
        this.tournaments = tournaments;
      });

    // Update form model
    const oldTournament = {
      phase_type: 'Groups',
      phase_number: null,
      group_number: null,
      tournament_id: null

    };

    (<FormGroup>this.form)
      .setValue(oldTournament, { onlySelf: true });

    // this.getTeams();
    // console.log(this.teams);
}

  setTeams() {
    if (this.form.value.tournament_id){
      this.getTeams();
    }
  }

  createMatches(id_phase: string) {
    this.apiService.getCreateMatches(id_phase)
      .subscribe(
        (data) => {
          console.log('succes creacion de matches');
        },
        (error) => {
          this.errorMessage = <any>error;
          console.log('error creando matches');
        }
      );
  }
}
