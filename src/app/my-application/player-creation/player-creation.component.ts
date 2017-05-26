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

  public idTeam: number;
  public error: string = '';

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
      .subscribe( params => { this.idTeam = +params['id']; } );
    console.log('Hola este es el id del equipo ' , this.idTeam);
  }

  createPlayer(event) {

    const formModel = this.form.value;

    const ids: number[] = new Array();
    ids.push( this.idTeam ) ;

    const saveElem: Player = {

      id_player: null,
      document: formModel.document as string,
      document_type: formModel.document_type as string,
      team_ids : ids,
      first_name: formModel.first_name as string,
      last_name: formModel.last_name as string,
      email: formModel.email as string,
      gender: formModel.gender as string,
      semester: formModel.semester as number,
      career: formModel.career as string,
      age: formModel.age as number,
      contact_phone: formModel.contact_phone as number,
      contact_emergency_phone: formModel.contact_emergency_phone as number,
      contact_emergency_name: formModel.contact_emergency_name as string,
      eps: formModel.eps as string
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
        (error) => {
          this.error = error.json().document ? 'Cédula ya existe!' : 'Error!';
          console.error('aqui esta el error' + this.error);
        },
        () => console.log('Lo intente | add()')
      );
  }

  reset() {
    this.form.reset();
  }

}
