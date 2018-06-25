import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsComponent } from './pages/projects/projects.component';
import { FrozenSeaComponent } from './pages/frozen-sea/frozen-sea.component';
import { BuntesDeutschlandComponent } from './pages/buntes-deutschland/buntes-deutschland.component';
import { SocialRideComponent } from './pages/social-ride/social-ride.component';
import { TimComponent } from './pages/tim/tim.component';
import { RoommateComponent } from './pages/roommate/roommate.component';
import {FestivalComponent} from './pages/festival/festival.component';
import {AboutComponent} from './pages/about/about.component';
import {ContactComponent} from './pages/contact/contact.component';

const appRoutes: Routes = [
  { path: 'projects',  component: ProjectsComponent },
  { path: 'about',  component: AboutComponent },
  { path: 'contact',  component: ContactComponent },
  { path: 'festival', component: FestivalComponent },
  { path: 'frozen-sea', component: FrozenSeaComponent },
  { path: 'buntes-deutschland', component: BuntesDeutschlandComponent },
  { path: 'social-ride', component: SocialRideComponent },
  { path: 'tim', component: TimComponent },
  { path: 'roommate', component: RoommateComponent },
  { path: '', redirectTo: '/projects', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
