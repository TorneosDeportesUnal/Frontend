import { Component, OnInit } from '@angular/core';
import { Tournament } from '../classes/tournament';
import { FormBuilder, Validators } from '@angular/forms';
import {ApiObservableService} from '../api-observable.service';

@Component({
  selector: 'app-tournament-creation',
  templateUrl: './tournament-creation.component.html',
  styleUrls: ['./tournament-creation.component.scss']
})
export class TournamentCreationComponent implements OnInit {


  ngOnInit() {
  }


  public errorMessage:string;

  public createTourForm = this.fb.group({

    name: ['', Validators.required],
    discipline: ['', Validators.required],
    gender: ['', Validators.required],
    begin_date: ['', Validators.required],
    end_date: ['', Validators.required]

  });
  constructor(public fb: FormBuilder, private apiService: ApiObservableService ) {}


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


	addTournament(name: string, begin_date:Date,
	end_date:Date,
	gender:string,
	discipline:string) {
  		//if (!name) { return; }
  		this.apiService.createTournament(name,  begin_date, end_date, gender, discipline)
                   .subscribe(
                    // hero  => this.heroes.push(hero),
                     error =>  this.errorMessage = <any>error);
}

}
