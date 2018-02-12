import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from "./landing/landing.component";
import { OurServicesComponent } from './our-services/our-services.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LandingComponent },
  { path: 'ourServices', component: OurServicesComponent }
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule { }
