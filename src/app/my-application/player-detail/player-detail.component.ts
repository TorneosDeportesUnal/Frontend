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

  public form: FormGroup;
  private selectOptionGender: any;


  constructor(private playerService: PlayerService,
              public fb: FormBuilder,
              private router: Router) {

    this.selectOptionGender = [
      {
        value: 'femenino',
        label: 'Femenino',
      }, {
        value: 'masculino',
        label: 'Masculino',
      }
    ];

  }

  ngOnInit() {

    console.log('hola documento tipo' + this.player.document_type);

    // creat form model
    this.form = this.fb.group({
      document: ['', Validators.required],
      document_type: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      gender: ['', Validators.required],
      semester: ['', Validators.required],
      career: ['', Validators.required],
      age: ['', Validators.required],
      contact_phone: ['', Validators.required]
    });

    // Update form model
    const oldPlayer = {
      document: this.player.document,
      document_type: this.player.document_type,
      first_name: this.player.first_name,
      last_name: this.player.last_name,
      email: this.player.email,
      gender: this.player.gender,
      semester: this.player.semester,
      career: this.player.career,
      age: this.player.age,
      contact_phone: this.player.contact_phone
    };

    (<FormGroup>this.form)
    .setValue(oldPlayer, { onlySelf: true });


    // Update single value
   // (<FormControl>this.form.controls['first_name'])
    //  .setValue('John', { onlySelf: true });
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
      gender: formModel.gender as string,
      document: formModel.document,
      document_type: formModel.document_type,
      last_name: formModel.last_name,
      email: formModel.email,
      semester: formModel.semester,
      career: formModel.career,
      age: formModel.age,
      contact_phone: formModel.contact_phone
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
