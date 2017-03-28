import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { ProjectListComponent } from './components/project-list/project-list.component';
import { IntroComponent } from './components/intro/intro.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SchipsComponent } from './schips/schips.component';
import { ProjectsComponent } from './projects/projects.component';
import { FrozenSeaComponent } from './frozen-sea/frozen-sea.component';
import { BuntesDeutschlandComponent } from './buntes-deutschland/buntes-deutschland.component';
import { SocialRideComponent } from './social-ride/social-ride.component';
import { TimComponent } from './tim/tim.component';
import { RoommateComponent } from './roommate/roommate.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    IntroComponent,
    NavigationComponent,
    SchipsComponent,
    ProjectsComponent,
    FrozenSeaComponent,
    BuntesDeutschlandComponent,
    SocialRideComponent,
    TimComponent,
    RoommateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
