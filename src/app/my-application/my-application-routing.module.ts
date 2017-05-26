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

import { MatchListComponent } from './match-list/match-list.component';
import { GroupsTeamListComponent } from './groups-team-list/groups-team-list.component';
import { GroupsMatchListComponent } from './groups-match-list/groups-match-list.component';




import { MyloginComponent } from './mylogin/mylogin.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [

  {
    path: '',
    data: {
      title: 'Torneos'
    },
    children: [
      {
        path: 'login',
        component: MyloginComponent
      },
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
       // canActivate: [AuthGuard],
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
      },
      {
        path: 'matchs',
        component: MatchListComponent,
        data: {
          title: 'match list'
        }
      },
      {
        path: 'group-list/:id',
        component: GroupsTeamListComponent,
        data: {
          title: 'lista de grupos'
        }
      },
      {
        path: 'matches-list',
        component: GroupsMatchListComponent,
        data: {
          title: 'Lista de Fechas por Grupo'
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
