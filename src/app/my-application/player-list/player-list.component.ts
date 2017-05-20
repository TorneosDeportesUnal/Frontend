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

  constructor(private playerService: PlayerService,
              private route: ActivatedRoute,
              private router: Router,
              private http: Http,
              private apiService: ApiObservableService ) {
   /* http.get('data.json')
      .subscribe((data) => {
        setTimeout(() => {
          this.data = data.json();
        }, 2000);
      });*/
  }
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


  getPlayers() {
    return this.apiService.getPlayers().map(
      (playerList) => {
        console.log('players' + playerList)
        this.players = playerList;
      console.log( 'this.players ' + this.players ); }
    ).catch((error) => {
      console.log('error ' + error);
      throw error;
    });;
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
}

