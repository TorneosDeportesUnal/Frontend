import {Component, OnInit} from '@angular/core';
import {Player} from '../classes/player';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PlayerService} from '../services/player.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-player-creation',
  templateUrl: './player-creation.component.html',
  styleUrls: ['./player-creation.component.scss']
})
export class PlayerCreationComponent implements OnInit {

  public idTeam: string;

  public form = this.fb.group({
    document: ['', Validators.required],
    document_type: ['', Validators.required],
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    email: ['', Validators.required],
    gender: ['', Validators.required],
    semester: ['', Validators.required],
    career: ['', Validators.required],
    age: ['', Validators.required],
    contact_phone: ['', Validators.required],
    contact_emergency_phone: ['', Validators.required],
    contact_emergency_name: ['', Validators.required],
    eps: ['', Validators.required],
    team_ids: ['', Validators.required]
  });

  constructor(public fb: FormBuilder,
              private route: ActivatedRoute,
              private playerService: PlayerService,
              private router: Router) {
  }

  ngOnInit() {
    // cargar equipo
    this.route.params
    // (+) converts string 'id' to a number
      .subscribe( params => { this.idTeam = params['id']; } );
    console.log('Hola este es el id del equipo ' , this.idTeam);
  }

  createPlayer(event) {

    const formModel = this.form.value;

    const saveElem: Player = {

      id_player: null,
      document: formModel.document as number,
      document_type: 'cc',
      first_name: formModel.first_name as string,
      last_name: formModel.last_name as string,
      email: formModel.document as string,
      gender: 'masculino',
      semester: formModel.document as number,
      career: formModel.document as string,
      age: 25,
      contact_phone: 12345678,
      contact_emergency_phone: formModel.document as number,
      contact_emergency_name: formModel.document as string,
      eps: formModel.document as string,
      team_ids : [this.idTeam]
    };

    this.add(saveElem);
  }

  add(player: Player) {

    this.playerService.createPlayer(player)
      .subscribe(
        () => {
          this.router.navigate( ['/players/team-view', this.idTeam] );
          console.log('hola entrando a succes de add()');
          }
      ,
        error => {
         error = error + 'errror | add()';
        },
        () => console.log('Lo intente | add()')
      );
  }

  reset() {
    this.form.reset();
  }

}
