import { Component, OnInit } from '@angular/core';
import {TeamService} from '../services/team.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {isNullOrUndefined} from 'util';
import {Team} from "../classes/team";

@Component({
  selector: 'app-team-view',
  templateUrl: './team-view.component.html',
  styleUrls: ['./team-view.component.scss']
})
export class TeamViewComponent implements OnInit {

  public players: any;
  public team: Team;

  constructor ( private teamService: TeamService,
               private route: ActivatedRoute,
               private router: Router ) { }

  ngOnInit() {
    this.getPlayers();
    this.getDetailsTeam();
  }

  getPlayers() {
    this.route.params
    // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.teamService.getPlayersByTeamId(params['id'])).subscribe(
      playersList =>  {this.players = playersList; },
      error => console.log(error)
    );
  }

  getDetailsTeam() {
    this.route.params
    // (+) converts string 'id' to a number
      .flatMap( (params: Params) => this.teamService.getTeamById(params['id']))
      .subscribe( teamDetails => {
          if (!isNullOrUndefined(teamDetails)) {
            this.team = teamDetails;
            console.log('debug | teamDetails', teamDetails);
          }
        },
        error => console.log(error)
      );
  }
}
