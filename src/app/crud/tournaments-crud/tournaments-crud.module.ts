import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Routing
import { TournamentsCrudRoutingModule } from './tournaments-crud-routing.module';

import { TournamentsCrudComponent } from './tournaments-crud.component';

@NgModule({
  imports: [
    
    TournamentsCrudRoutingModule
  ],
  declarations: [
  	TournamentsCrudComponent
  ]
})
export class TournamentsCrudModule { }
