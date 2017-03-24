import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

//bootstrap modules
import { AlertModule } from 'ng2-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PageRollerComponent } from './page-roller/page-roller.component';
import { BoxThingComponent } from './box-thing/box-thing.component';
import { HeaderContentPaneComponent } from './header-content-pane/header-content-pane.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageHeaderComponent,
    PageRollerComponent,
    BoxThingComponent,
    HeaderContentPaneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
