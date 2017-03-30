import { Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
 	{ path: 'contact', component: ContactComponent },
 	{ path: 'administrator', component: AdministratorComponent }
];