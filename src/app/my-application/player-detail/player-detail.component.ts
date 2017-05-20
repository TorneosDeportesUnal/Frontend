import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Player} from '../classes/player';
import {PlayerService} from '../services/player.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss']
})
export class PlayerDetailComponent implements OnInit {

  @Input('player') player: Player;
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter() ;

  public form = this.fb.group({
    document: ['', Validators.required],
    document_type: ['', Validators.required],
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    email: ['', Validators.required],
  });

  constructor(private playerService: PlayerService,
              public fb: FormBuilder,
              private router: Router) { }

  ngOnInit() {
  }

  closePopUp() {
    this.closeModal.emit(false);
  }

  updatePlayer(event) {

    const formModel = this.form.value;

    let ids: number[] = new Array();
    ids = this.player.team_ids;
    console.log('player team ids ', ids );

    const saveElem: any = {
      id_player: this.player['id'],
      first_name: formModel.first_name as string,
    };


    this.update(saveElem);
  }

  update(player: any) {

    this.playerService.updatePlayer(player)
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
