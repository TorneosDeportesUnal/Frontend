import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TournamentsCrudComponent } from './tournaments-crud.component';


const routes: Routes = [
	{
    path: '',
    component: TournamentsCrudComponent,
    data: {
      title: 'Tournaments'
    }
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TournamentsCrudRoutingModule { }
