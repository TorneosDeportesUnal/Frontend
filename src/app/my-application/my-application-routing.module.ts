import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TournamentCreationComponent } from './tournament-creation/tournament-creation.component';

import { TeamCreationComponent } from './team-creation/team-creation.component';

import { PlayerListComponent } from './player-list/player-list.component';

import { PhaseCreationComponent } from './phase-creation/phase-creation.component';

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
        path: 'tournaments',
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
