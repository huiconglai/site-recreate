import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { AppRoutingModule } from './/app-routing.module';
import { OurServicesComponent } from './our-services/our-services.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    OurServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
