import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignalsComponent } from './signals/signals.component';
import { RequiredInputComponent } from './required-input/required-input.component';
import { HomeComponent } from './home/home.component';
import { DevExperienceComponent } from './dev-experience/dev-experience.component';

@NgModule({
  declarations: [
    AppComponent,
    SignalsComponent,
    RequiredInputComponent,
    HomeComponent,
    DevExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
