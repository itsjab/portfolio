import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { IntroComponent } from './components/intro/intro.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProjectService } from './services/project.service';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    IntroComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
