import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PlayerListComponent } from './player-list/player-list.component';

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
        path: 'list23',
        component: PlayerListComponent,
        data: {
          title: 'Simple Line Icons'
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
