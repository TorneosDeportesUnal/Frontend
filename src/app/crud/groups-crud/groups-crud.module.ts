import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsCrudRoutingModule } from './groups-crud-routing.module';

import { GroupsCrudComponent } from './groups-crud.component';

@NgModule({
  imports: [
    
    GroupsCrudRoutingModule
  ],
  declarations: [
  	GroupsCrudComponent
  ]
})
export class GroupsCrudModule { }
