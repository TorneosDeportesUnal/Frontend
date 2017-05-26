import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Tournament} from '../classes/tournament';
import {TournamentService} from '../services/tournament.service';

@Component({
  selector: 'app-warning-pop-up',
  templateUrl: './warning-pop-up.component.html',
  styleUrls: ['./warning-pop-up.component.scss']
})
export class WarningPopUpComponent implements OnInit {

  @Input('tournament') tournament: Tournament;
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter() ;


  constructor(private tournamentService: TournamentService, )
    {

  }

  ngOnInit() {

    console.log('id my Torneo' + this.tournament.id);

  }

  // metodos

  closePopUp() {
    this.closeModal.emit(false);
  }

   deleteTournament(id: any) {

    this.tournamentService.deleteTournament(id)
      .subscribe(
        () => {
          this.closePopUp();
          window.location.reload();
          console.log('hola entrando a success de add() del delete');
        }
        ,
        error => {
          error = error + 'errror | add()';
        },
        () => console.log('Lo intente | add()')
      );
  }

}
