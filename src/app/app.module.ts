import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { HowtoplayComponent } from './components/howtoplay/howtoplay.component';
import { TeamComponent } from './components/team/team.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComparePasswordsDirective } from './directives/compare-passwords.directive';
import { ValidateNameDirective } from './directives/validate-name.directive';
import { TournamentComponent } from './components/tournament/tournament.component';
import { TournamentAddComponent } from './components/tournament-add/tournament-add.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HowtoplayComponent,
    TeamComponent,
    PageNotFoundComponent,
    NavbarComponent,
    FooterComponent,
    ComparePasswordsDirective,
    ValidateNameDirective,
    TournamentComponent,
    TournamentAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
