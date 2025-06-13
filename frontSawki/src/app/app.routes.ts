import { Route } from '@angular/router';
import { AcuielleComponent } from './acuielle/acuielle.component';
import { ContactComponent } from './contact/contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactService } from './services/contact.service';
import { FournitureScolaireComponent } from './fourniture-scolaire/fourniture-scolaire.component';
import { ServicesComponent } from './services/services.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';


export const routes: Route[] = [
  { path: '', component: AcuielleComponent },
  { path: 'accueil', component: AcuielleComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contact-list', component: ContactListComponent },
  {path:'fourniture-scolaire',component:FournitureScolaireComponent},
  {path:'services',component:ServicesComponent},
  {path:'maintenance', component:MaintenanceComponent},
  {path:'list',component:ContactListComponent ,canActivate:[authGuard]},
  {path:'login',component:LoginComponent}

];

