import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayersCrudComponent } from './players-crud.component';

const routes: Routes = [
	{
    path: '',
    component: PlayersCrudComponent,
    data: {
      title: 'Players'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayersCrudRoutingModule { }
