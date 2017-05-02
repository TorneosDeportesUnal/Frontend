import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsCrudRoutingModule } from './teams-crud-routing.module';

import { TeamsCrudComponent } from './teams-crud.component';

@NgModule({
  imports: [
    
    TeamsCrudRoutingModule
  ],
  declarations: [
  	TeamsCrudComponent
  ]
})
export class TeamsCrudModule { }
