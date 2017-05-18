import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Player} from '../classes/player';
import {PlayerService} from '../services/player.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss']
})
export class PlayerDetailComponent implements OnInit {

  @Input('player') player: Player;
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter() ;

  public myGroup: FormGroup;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.myGroup = new FormGroup({
      firstName: new FormControl()
    });
  }


  updatePlayer(form) {
    console.log('siiii');
   /* this.playerService.updatePlayer(form);*/
  }

  closePopUp() {
    this.closeModal.emit(false);
  }

}
