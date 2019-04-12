import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegComponent } from './reg/reg.component';
import { EventEmitterComponent } from './event-emitter/event-emitter.component';
import { ProfileComponent } from './guard/profile/profile.component';
import { AboutComponent } from './guard/about/about.component';
import { AboutGuard } from './guard/about/about.guard';
import { ExitAboutGuard } from './guard/about/exit.about.guard';
import { AppComponent } from './app.component';
import { NgrxComponent } from './ngrx/ngrx.component';
import { AddComponent } from './add/add.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ngrx',
    pathMatch: "full",
  },
  {
    path: 'app',
    component: AppComponent,
  },
  {
    path: 'add',
    component: AddComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'emit',
    component: EventEmitterComponent,
  },
  {
    path: 'reg',
    component: RegComponent,
  },
  {
    path: 'ngrx',
    component: NgrxComponent,
  },
  {
    path: 'rxjs',
    component: RxjsComponent,
  },
  {
    path: 'guard/profile',
    component: ProfileComponent,
  },
  {
    path: 'guard/about',
    component: AboutComponent,
    canActivate: [AboutGuard],
    canDeactivate: [ExitAboutGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AboutGuard, ExitAboutGuard]
})
export class AppRoutingModule { }
