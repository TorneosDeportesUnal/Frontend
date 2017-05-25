import { Component, OnInit } from '@angular/core';
import { Tournament } from '../classes/tournament';
import { FormBuilder, Validators } from '@angular/forms';
import {ApiObservableService} from '../api-observable.service';

// test redirigir
import { Router } from '@angular/router';
import {TournamentService} from '../services/tournament.service';

@Component({
  selector: 'app-tournament-creation',
  templateUrl: './tournament-creation.component.html',
  styleUrls: ['./tournament-creation.component.scss']
})
export class TournamentCreationComponent implements OnInit {


  public errorMessage: string;

  public createTourForm = this.fb.group({

    name: ['', Validators.required],
    discipline: ['', Validators.required],
    gender: ['', Validators.required],
    begin_date: ['', Validators.required],
    end_date: ['', Validators.required]

  });

  // test find document exist
  public arrayTest: any[];

  constructor(public fb: FormBuilder, private tournamentService: TournamentService,  private router: Router ) {}


  ngOnInit() {

    // init test find document
    this.arrayTest = [
      {
        name: 'julian',
        document: '1',
      }, {
        value: 'camilo',
        document: '2',
      }
    ];

    const result = this.search(this.arrayTest, '1');
    console.log('hola result' + result.name);
    // end find document


  }

  save(event) {
    console.log(event);
    console.log(this.createTourForm.value);
    console.log(this.createTourForm.value.name);
    this.addTournament(this.createTourForm.value.name,
    this.createTourForm.value.begin_date,
    this.createTourForm.value.end_date,
    this.createTourForm.value.gender,
    this.createTourForm.value.discipline);
  }

  reset() {
    this.createTourForm.reset();
	}


	addTournament(name: string, begin_date: Date,
	end_date: Date,
	gender: string,
	discipline: string) {
  		this.tournamentService.createTournament( name, begin_date, end_date, gender, discipline )
                   .subscribe(
                      tournament  => console.log('onNext'),
                      error => console.log('ERROR: ', error),
                      () => { this.router.navigate(['/players/list-tournament'])}
                      );
}

  // metod to find document
  search(array: any[], field: string): any {
      console.log(' hola search');
      const ret = array.filter(item => item.document === field)[0];
      console.log(ret);
      return ret;
  }

}
