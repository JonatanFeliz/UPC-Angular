import { ScoreComponent } from './components/score/score.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { ContactComponent } from './components/contact/contact.component';
import { TeamComponent } from './components/team/team.component';
import { HowtoplayComponent } from './components/howtoplay/howtoplay.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent,
  },
  {
    path:'play',
    component: HowtoplayComponent,
  },
  {
    path:'team',
    component: TeamComponent,
  },
  {
    path:'contact',
    component: ContactComponent,
  },
  {
    path:'login',
    component: LoginComponent,

  },
  {
    path:'score',
    component: ScoreComponent,

  },
  {
    path:'register',
    component: RegisterComponent,

  },
  { path: '', 
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', 
   component: PageNotFoundComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
