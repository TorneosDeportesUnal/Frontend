import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TournamentCreationComponent } from './tournament-creation/tournament-creation.component';

import { TeamCreationComponent } from './team-creation/team-creation.component';

import { PlayerListComponent } from './player-list/player-list.component';
import { PhaseGroupCreationComponent } from './phase-group-creation/phase-group-creation.component';

const routes: Routes = [

  {
    path: '',
    data: {
      title: 'Torneos'
    },
    children: [
      {
        path: 'list',
        component: PlayerListComponent,
        data: {
          title: 'Font Awesome'
        }
      },
      {
        path: 'tournament',
        component: TournamentCreationComponent,
        data: {
          title: 'Nuevo Torneo'
        }
      },
      {
        path: 'team',
        component: TeamCreationComponent,
        data: {
          title: 'Nuevo Equipo'
        }
      },
      {
        path: 'phase',
        component: PhaseGroupCreationComponent,
        data: {
          title: 'Sorteo de equipos'
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
