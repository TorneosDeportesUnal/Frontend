import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//modules for data
import { DataTableModule } from 'angular2-datatable';
import { HttpModule } from '@angular/http';
import { DataFilterPipe } from './datafilterpipe';
import { FormsModule } from '@angular/forms';

import { MyApplicationRoutingModule } from './my-application-routing.module';
import { PlayerListComponent } from './player-list/player-list.component';

@NgModule({
  imports: [
    CommonModule,
    MyApplicationRoutingModule,
    HttpModule,
    FormsModule,
    DataTableModule
  ],
  declarations: [PlayerListComponent, DataFilterPipe]
})
export class MyApplicationModule { }
