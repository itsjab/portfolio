import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { ProjectListComponent } from './components/project-list/project-list.component';
import { IntroComponent } from './components/intro/intro.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FrozenSeaComponent } from './components/frozen-sea/frozen-sea.component';
import { BuntesDeutschlandComponent } from './components/buntes-deutschland/buntes-deutschland.component';
import { SocialRideComponent } from './components/social-ride/social-ride.component';
import { TimComponent } from './components/tim/tim.component';
import { RoommateComponent } from './components/roommate/roommate.component';
import { ProjectIntroComponent } from './components/project-intro/project-intro.component';
import {ProjectService} from "./services/project-service/project.service";
import {ProjectNavigationComponent} from "./components/project-navigation/project-navigation.component";
import { ProjectStatsComponent } from './components/project-stats/project-stats.component';
import { FooterComponent } from './components/footer/footer.component';
import { FestivalComponent } from './components/festival/festival.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    IntroComponent,
    NavigationComponent,
    ProjectsComponent,
    FrozenSeaComponent,
    BuntesDeutschlandComponent,
    SocialRideComponent,
    TimComponent,
    RoommateComponent,
    ProjectIntroComponent,
    ProjectNavigationComponent,
    ProjectStatsComponent,
    FooterComponent,
    FestivalComponent,
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
