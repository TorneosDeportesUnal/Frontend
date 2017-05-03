import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Crud'
    },
    children: [
      {
        path: 'tournaments-crud',
        loadChildren: './tournaments-crud/tournaments-crud.module#TournamentsCrudModule',
        data: {
          title: 'Tournaments'
        }
      },
      {
        path: 'groups-crud',
        loadChildren: './groups-crud/groups-crud.module#GroupsCrudModule',
        data: {
          title: 'Groups'
        }
      },
      {
        path: 'teams-crud',
        loadChildren: './teams-crud/teams-crud.module#TeamsCrudModule',
        data: {
          title: 'Teams'
        }
      },
      {
        path: 'players-crud',
        loadChildren: './players-crud/players-crud.module#PlayersCrudModule',
        data: {
          title: 'Players'
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
export class CrudRoutingModule { }
