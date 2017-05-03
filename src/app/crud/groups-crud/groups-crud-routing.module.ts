import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupsCrudComponent } from './groups-crud.component';


const routes: Routes = [

	{
    path: '',
    component: GroupsCrudComponent,
    data: {
      title: 'Groups'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupsCrudRoutingModule { }
