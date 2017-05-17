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
import { TournamentCreationComponent } from './tournament-creation/tournament-creation.component';

//services
import { ApiObservableService } from './api-observable.service';
import { TournamentService } from './services/tournament.service';

//forms
import { ReactiveFormsModule } from '@angular/forms';
import { TeamCreationComponent } from './team-creation/team-creation.component';
import { PhaseCreationComponent } from './phase-creation/phase-creation.component';

import { TournamentListComponent } from './tournament-list/tournament-list.component';

import { TournamentViewComponent } from './tournament-view/tournament-view.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { TeamViewComponent } from './team-view/team-view.component';
import { PlayerCreationComponent } from './player-creation/player-creation.component';
import {PlayerService} from './services/player.service';
import {TeamService} from './services/team.service';
import { TeamListComponent } from './team-list/team-list.component';

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
    ApiObservableService,
    TournamentService,
    PlayerService,
    TeamService
  ],
  declarations: [PlayerListComponent,
    DataFilterPipe,
    TournamentCreationComponent,
    TeamCreationComponent,
    TournamentListComponent,
    PhaseCreationComponent, TournamentViewComponent, PopUpComponent, TeamViewComponent, PlayerCreationComponent, TeamListComponent]
})
export class MyApplicationModule { }
