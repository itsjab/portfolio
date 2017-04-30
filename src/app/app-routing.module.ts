import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SchipsComponent } from './components/schips/schips.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FrozenSeaComponent } from './components/frozen-sea/frozen-sea.component';
import { BuntesDeutschlandComponent } from './components/buntes-deutschland/buntes-deutschland.component';
import { SocialRideComponent } from './components/social-ride/social-ride.component';
import { TimComponent } from './components/tim/tim.component';
import { RoommateComponent } from './components/roommate/roommate.component';

const appRoutes: Routes = [
  { path: 'projects',  component: ProjectsComponent },
  { path: 'schips', component: SchipsComponent },
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
