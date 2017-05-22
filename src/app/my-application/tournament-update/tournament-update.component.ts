import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Player} from '../classes/player';
import {PlayerService} from '../services/player.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Tournament} from '../classes/tournament';
import {TournamentService} from '../services/tournament.service';

@Component({
  selector: 'app-tournament-update',
  templateUrl: './tournament-update.component.html',
  styleUrls: ['./tournament-update.component.scss']
})
export class TournamentUpdateComponent implements OnInit {

  @Input('tournament') tournament: Tournament;
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter() ;

  public form: FormGroup;

  constructor(private tournamentService: TournamentService,
              public fb: FormBuilder) {

  }

  ngOnInit() {

    console.log('id my Torneo' + this.tournament.id);

  this.form = this.fb.group({
      name: ['', Validators.required],
      discipline: ['', Validators.required],
      gender: ['', Validators.required],
      begin_date: ['', Validators.required],
      end_date: ['', Validators.required]
    });

    // Update form model
    const oldTournament = {
      name: this.tournament.name,
      discipline: this.tournament.discipline,
      gender: this.tournament.gender,
      begin_date: this.tournament.begin_date,
      end_date: this.tournament.end_date
    };

    (<FormGroup>this.form)
      .setValue(oldTournament, { onlySelf: true });
  }


  // ******** metodos ***************

  closePopUp() {
    this.closeModal.emit(false);
  }

  updateTournamet(event) {

    const formModel = this.form.value;

    const saveElem: any = {
      id: this.tournament.id as number,
      name: formModel.name as string,
      discipline: formModel.discipline as string,
      gender: formModel.gender as string,
      begin_date: formModel.begin_date as Date,
      end_date: formModel.end_date as Date,
    };
    this.update(saveElem);
  }

  update(tournament: any) {

    this.tournamentService.updateTournament(tournament)
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
