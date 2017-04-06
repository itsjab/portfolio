import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { ProjectListComponent } from './components/project-list/project-list.component';
import { IntroComponent } from './components/intro/intro.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SchipsComponent } from './components/schips/schips.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FrozenSeaComponent } from './components/frozen-sea/frozen-sea.component';
import { BuntesDeutschlandComponent } from './buntes-deutschland/buntes-deutschland.component';
import { SocialRideComponent } from './components/social-ride/social-ride.component';
import { TimComponent } from './components/tim/tim.component';
import { RoommateComponent } from './components/roommate/roommate.component';
import { ProjectIntroComponent } from './components/project-intro/project-intro.component';
import {ProjectService} from "./services/project-service/project.service";

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
    ProjectIntroComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
