import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamsCrudComponent } from './teams-crud.component';

const routes: Routes = [

{
    path: '',
    component: TeamsCrudComponent,
    data: {
      title: 'Teams'
    }
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsCrudRoutingModule { }
