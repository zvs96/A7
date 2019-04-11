import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegComponent } from './reg/reg.component';
import { EventEmitterComponent } from './event-emitter/event-emitter.component';
import { ProfileComponent } from './guard/profile/profile.component';
import { AboutComponent } from './guard/about/about.component';
import { AboutGuard } from './guard/about/about.guard';
import { ExitAboutGuard } from './guard/about/exit.about.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: "full",
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'about',
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
