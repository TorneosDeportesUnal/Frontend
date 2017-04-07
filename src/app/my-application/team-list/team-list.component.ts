import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {ApiObservableService} from '../api-observable.service';


@Component({
  selector: 'app-team-list', 
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {


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
    this.getTeams();
    console.log(this.data);
  }

  public toInt(num: string) {
    return +num;
  }

  public sortByWordLength = (a: any) => {
    return a.name.length;
  }


  getTeams(){
    this.apiService.getTeams().subscribe(
      teamList =>  {this.data = teamList},
      error => console.log(error)
    );
  }
}

