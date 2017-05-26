import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {ApiObservableService} from '../api-observable.service';
import {PlayerService} from '../services/player.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Player} from '../classes/player';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {


  public players: Player[];
  public selectedPlayer: Player;
  public filterQuery = '';
  public showPlayer: boolean = false;

  // pop-up delete player

  public showDelete: boolean = false;

  constructor(private playerService: PlayerService,
              private route: ActivatedRoute,
              private router: Router,
              private http: Http,
              private apiService: ApiObservableService ) {}

  ngOnInit() {
    this.getPlayers().subscribe(_ => {;
      console.log('ngOnit after getUsers() ' + this.players);
    });

  }

  public toInt(num: string) {
    return +num;
  }

  public sortByWordLength = (a: any) => {
    return a.name.length;
  }

  deletePlayer(id_player: number) {
  this.playerService.deletePlayer(id_player).subscribe(
    () => { console.log('success deletePlayer');
            window.location.reload(); },
    () => { console.log('error deletePlayer'); }
  );
  }

  getPlayers() {
    return this.apiService.getPlayers().map(
      (playerList) => {
        console.log('players' + playerList)
        this.players = playerList;
      console.log( 'this.players ' + this.players ); }
    ).catch((error) => {
      console.log('error ' + error);
      throw error;
    });
  }
  goToCreatePlayer(event) {
    console.log('DEBUG | goToCreatePlayer()', event);
    this.router.navigate(['/players/player-creation']);
  }

  openPlayer(player) {
    this.selectedPlayer = player;
    this.changeStatePopUp(true);
  }

  changeStatePopUp(value) {
    this.showPlayer = value;
  }

  // metodos pop-up delete player

  openPlayerDelete(player) {
    this.selectedPlayer = player;
    this.changeStatePopUpDelete(true);
  }
  changeStatePopUpDelete(value) {
    this.showDelete = value;
  }
}

