import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {

  ngOnInit(): void {
  }

  public data;
  public filterQuery = '';

  constructor(private http: Http) {
    http.get('data.json')
      .subscribe((data) => {
        setTimeout(() => {
          this.data = data.json();
        }, 2000);
      });
  }

  public toInt(num: string) {
    return +num;
  }

  public sortByWordLength = (a:any) => {
    return a.name.length;
  }

}
