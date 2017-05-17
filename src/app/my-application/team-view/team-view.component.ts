import { Component, OnInit } from '@angular/core';
import {TeamService} from '../services/team.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-team-view',
  templateUrl: './team-view.component.html',
  styleUrls: ['./team-view.component.scss']
})
export class TeamViewComponent implements OnInit {

  public players: any;

  constructor( private teamService: TeamService,
               private route: ActivatedRoute,
               private router: Router) { }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers() {
    this.route.params
    // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.teamService.getPlayersByTeamId(params['id'])).subscribe(
      playersList =>  {this.players = playersList; },
      error => console.log(error)
    );
  }



}
