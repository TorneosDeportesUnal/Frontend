import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TournamentCreationComponent } from './tournament-creation/tournament-creation.component';
import { TeamCreationComponent } from './team-creation/team-creation.component';
import {PlayerCreationComponent} from './player-creation/player-creation.component';

import { PlayerListComponent } from './player-list/player-list.component';
import { TournamentListComponent } from './tournament-list/tournament-list.component';
import { TeamListComponent } from './team-list/team-list.component';

import { PhaseCreationComponent } from './phase-creation/phase-creation.component';
import { TournamentViewComponent } from './tournament-view/tournament-view.component';
import { TeamViewComponent } from './team-view/team-view.component';

const routes: Routes = [

  {
    path: '',
    data: {
      title: 'Torneos'
    },
    children: [
      {
        path: 'player-creation/:id',
        component: PlayerCreationComponent,
        data: {
          title: 'Nuevo Jugador'
        }
      },
      {
        path: 'team-view/:id',
        component: TeamViewComponent,
        data: {
          title: 'Lista Jugadores por Equipo'
        }
      },
       {
        path: 'teams-by-tournament/:id',
        component: TournamentViewComponent,
        data: {
          title: 'Lista Equipos del Torneo'
        }
      },
      {
        path: 'list-tournament',
        component: TournamentListComponent,
        data: {
          title: 'Lista Torneos'
        }
      },
      {
        path: 'list-team',
        component: TeamListComponent,
        data: {
          title: 'Lista Equipos'
        }
      },
      {
        path: 'list-player',
        component: PlayerListComponent,
        data: {
          title: 'Lista Jugadores'
        }
      },
      {
        path: 'tournament-creation',
        component: TournamentCreationComponent,
        data: {
          title: 'Nuevo Torneo'
        }
      },
      {
        path: 'team-creation',
        component: TeamCreationComponent,
        data: {
          title: 'Nuevo Equipo'
        }
      },
      {
        path: 'phase',
        component: PhaseCreationComponent,
        data: {
          title: 'Nuevo fase'
        }
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class MyApplicationRoutingModule { }
