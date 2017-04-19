import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PlayerListComponent } from './player-list/player-list.component';
import { TournamentCreationComponent } from './tournament-creation/tournament-creation.component';


const routes: Routes = [

  {
    path: '',
    data: {
      title: 'Icons'
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
          title: 'Creation'
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
