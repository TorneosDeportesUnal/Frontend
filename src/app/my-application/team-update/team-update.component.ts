import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Player} from '../classes/player';
import {PlayerService} from '../services/player.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Tournament} from '../classes/tournament';
import {TournamentService} from '../services/tournament.service';
import {Team} from '../classes/team';
import {TeamService} from '../services/team.service';

@Component({
  selector: 'app-team-update',
  templateUrl: './team-update.component.html',
  styleUrls: ['./team-update.component.scss']
})
export class TeamUpdateComponent implements OnInit {

  @Input('team') team: Team;
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter() ;

  public form: FormGroup;

  constructor(private teamService: TeamService,
              public fb: FormBuilder) { }

  ngOnInit() {

    console.log('id my Team' + this.team.id);

    // build form
  this.form = this.fb.group({
      name: ['', Validators.required],
      coach_name: ['', Validators.required],
      captain: ['', Validators.required],
      uniform_color: ['', Validators.required],
    });

    // Update form model
    const oldTeam = {
      name: this.team.name,
      coach_name: this.team.coach_name,
      captain: this.team.captain,
      uniform_color: this.team.uniform_color,
    };

    (<FormGroup>this.form)
      .setValue(oldTeam, { onlySelf: true });
  }

  // ******** metodos ***************

  closePopUp() {
    this.closeModal.emit(false);
  }

  updateTeam(event) {

    const formModel = this.form.value;

    const saveElem: any = {
      id: this.team.id as number,
      name: formModel.name as string,
      coach_name: formModel.coach_name as string,
      captain: formModel.captain as string,
      uniform_color: formModel.uniform_color as string
    };
    this.update(saveElem);
  }

  update(team: any) {

    this.teamService.updateTeam(team)
      .subscribe(
        () => {
          this.closePopUp();
          window.location.reload();
          console.log('hola entrando a succes de add() del update');
        }
        ,
        error => {
          error = error + 'errror | add()';
        },
        () => console.log('Lo intente | add()')
      );
  }

}
