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
import { FrozenSeaComponent } from './pages/frozen-sea/frozen-sea.component';
import { BuntesDeutschlandComponent } from './pages/buntes-deutschland/buntes-deutschland.component';
import { SocialRideComponent } from './pages/social-ride/social-ride.component';
import { TimComponent } from './pages/tim/tim.component';
import { RoommateComponent } from './pages/roommate/roommate.component';
import { ProjectIntroComponent } from './components/project-intro/project-intro.component';
import {ProjectService} from "./services/project-service/project.service";
import {ProjectNavigationComponent} from "./components/project-navigation/project-navigation.component";
import { ProjectStatsComponent } from './components/project-stats/project-stats.component';
import { FooterComponent } from './components/footer/footer.component';
import { FestivalComponent } from './pages/festival/festival.component';
import { AboutComponent } from './pages/about/about.component';
import {WorkService} from "./services/work-service/work.service";

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
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ProjectService, WorkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
