import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamCreationRoutingModule } from './team-creation-routing.module';
import { TeamCreationComponent } from './team-creation.component';

@NgModule({
  imports: [
    CommonModule,
    TeamCreationRoutingModule
  ],
  declarations: [TeamCreationComponent]
})
export class TeamCreationModule { }
