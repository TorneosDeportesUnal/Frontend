import {Component, OnInit} from '@angular/core';
import {Player} from '../classes/player';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PlayerService} from '../services/player.service';

@Component({
  selector: 'app-player-creation',
  templateUrl: './player-creation.component.html',
  styleUrls: ['./player-creation.component.scss']
})
export class PlayerCreationComponent implements OnInit {

  public form = this.fb.group({
    name: ['', Validators.required],
    document: ['', Validators.required]
  });

  constructor(public fb: FormBuilder,
  private playerService: PlayerService) {
  }

  ngOnInit() {
    //cargar equipo
  }

  createPlayer(event) {

    const formModel = this.form.value;

    const saveElem: Player = {

      id_player: null,
      document: formModel.document as number,
      document_type: formModel.document as string,
      first_name: formModel.document as string,
      last_name: formModel.document as string,
      email: formModel.document as string,
      gender: formModel.document as string,
      semester: formModel.document as number,
      career: formModel.document as string,
      age: formModel.document as number,
      contact_phone: formModel.document as number,
      contact_emergency_phone: formModel.document as number,
      contact_emergency_name: formModel.document as string,
      eps: formModel.document as string
    };

    this.add(saveElem);
  }

  add(player: Player) {

    this.playerService.createPlayer(player)
      .subscribe((data: any) => {
          data = data;
        },
        error => {
         error = error + 'AQUIIII';
        },
        () => console.log('Lo intente')
      );
  }

  reset() {
    this.form.reset();
  }

}
