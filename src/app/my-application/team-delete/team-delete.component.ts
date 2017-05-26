import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Team} from '../classes/team';
import {TeamService} from '../services/team.service';

@Component({
  selector: 'app-team-delete',
  templateUrl: './team-delete.component.html',
  styleUrls: ['./team-delete.component.scss']
})
export class TeamDeleteComponent implements OnInit {
  @Input('team') team: Team;
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter() ;


  constructor(private teamService: TeamService, ) {

  }

  ngOnInit() {

    console.log('id my Team' + this.team.id);

  }

  // metodos

  closePopUp() {
    this.closeModal.emit(false);
  }

  deleteTeam(idTeam) {

    this.teamService.deleteTeam(idTeam).subscribe(
      () => { console.log('success deleteTeam');
        window.location.reload(); },
      () => { console.log('error deleteTeam'); }
    );
  }

}
