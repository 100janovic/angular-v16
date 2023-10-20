import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignalsComponent } from './signals/signals.component';
import { DevExperienceComponent } from './dev-experience/dev-experience.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'devexperience', component: DevExperienceComponent },
  { path: 'signals', component: SignalsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
