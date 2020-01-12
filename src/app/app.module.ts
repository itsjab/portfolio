import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
// Pages
import {FestivalComponent} from './pages/festival/festival.component';
import {FrozenSeaComponent} from './pages/frozen-sea/frozen-sea.component';
import {BuntesDeutschlandComponent} from './pages/buntes-deutschland/buntes-deutschland.component';
import {TimComponent} from './pages/tim/tim.component';
import {SocialRideComponent} from './pages/social-ride/social-ride.component';
import {RoommateComponent} from './pages/roommate/roommate.component';
import {ContactComponent} from './pages/contact/contact.component';
import {AboutComponent} from './pages/about/about.component';
import {ProjectsComponent} from './pages/projects/projects.component';
// Components
import {ProjectListComponent} from './components/project-list/project-list.component';
import {IntroComponent} from './components/intro/intro.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {ProjectIntroComponent} from './components/project-intro/project-intro.component';
import {ProjectNavigationComponent} from './components/project-navigation/project-navigation.component';
import {ProjectStatsComponent} from './components/project-stats/project-stats.component';
import {FooterComponent} from './components/footer/footer.component';
import {LegalNoticeComponent} from './pages/legal-notice/legal-notice.component';
import {FinoComponent} from './pages/fino/fino.component';
// Services
import {ProjectService} from './services/project-service/project.service';
import {WorkService} from './services/work-service/work.service';
import {HelperService} from './services/helper-service/helper.service';
import {SendMessageService} from './services/send-message-service/send-message.service';
// Modules
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';


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
    ContactComponent,
    LegalNoticeComponent,
    FinoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ProjectService, WorkService, HelperService, SendMessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
