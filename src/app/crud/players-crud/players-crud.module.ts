import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersCrudRoutingModule } from './players-crud-routing.module';

import { PlayersCrudComponent } from './players-crud.component';


@NgModule({
  imports: [
    
    PlayersCrudRoutingModule
  ],
  declarations: [
  	PlayersCrudComponent
  ]
})
export class PlayersCrudModule { }
