import { NgModule } from '@angular/core';

import { p404Component } from './404.component';
import { p500Component } from './500.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

import { PagesRoutingModule } from './pages-routing.module';
import { UserService } from '../my-application/services/user.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    PagesRoutingModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    UserService
  ],
  declarations: [
    p404Component,
    p500Component,
    LoginComponent,
    RegisterComponent
  ]
})
export class PagesModule { }
