import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Player} from '../classes/player';
import {PlayerService} from '../services/player.service';

@Component({
  selector: 'app-player-delete',
  templateUrl: './player-delete.component.html',
  styleUrls: ['./player-delete.component.scss']
})

export class PlayerDeleteComponent implements OnInit {
  @Input('player') player: Player;
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter() ;


  constructor(private playerService: PlayerService, ) {

  }

  ngOnInit() {

    console.log('id my Player' + this.player.id_player);

  }

  // metodos

  closePopUp() {
    this.closeModal.emit(false);
  }

  deletePlayer(idPlayer) {

    this.playerService.deletePlayer(idPlayer).subscribe(
      () => { console.log('success deletePlayer');
        window.location.reload(); },
      () => { console.log('error deletePlayer'); }
    );
  }

}
