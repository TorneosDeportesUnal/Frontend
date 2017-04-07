import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {ApiObservableService} from '../api-observable.service';


@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {


  public data;
  public filterQuery = '';

  constructor(private http: Http,
              private apiService: ApiObservableService )
  {
   /* http.get('data.json')
      .subscribe((data) => {
        setTimeout(() => {
          this.data = data.json();
        }, 2000);
      });*/
  }
  ngOnInit(): void {
    this.getPlayers();
    console.log(this.data);
  }

  public toInt(num: string) {
    return +num;
  }

  public sortByWordLength = (a: any) => {
    return a.name.length;
  }


  getPlayers(){
    this.apiService.getPlayers().subscribe(
      playerList =>  {this.data = playerList},
      error => console.log(error)
    );
  }
}

