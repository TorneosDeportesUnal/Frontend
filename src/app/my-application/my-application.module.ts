import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//modules for data
import { DataTableModule } from 'angular2-datatable';
import { HttpModule } from '@angular/http';
import { DataFilterPipe } from './datafilterpipe';
import { FormsModule } from '@angular/forms';

//components
import { MyApplicationRoutingModule } from './my-application-routing.module';
import { PlayerListComponent } from './player-list/player-list.component';

//services
import {ApiObservableService} from './api-observable.service';
import { TournamentCreationComponent } from './tournament-creation/tournament-creation.component';

//forms
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    MyApplicationRoutingModule,
    HttpModule,
    FormsModule,
    DataTableModule,
    ReactiveFormsModule
  ],
  providers: [
    ApiObservableService
  ],
  declarations: [PlayerListComponent, DataFilterPipe, TournamentCreationComponent]
})
export class MyApplicationModule { }
