import { BrowserModule } from '@angular/platform-browser';
import { NgModule, EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsService } from './cars.service';
import { FilterPipe } from './filter.pipe';
import { HomeComponent } from './home/home.component';
import { RegComponent } from './reg/reg.component';
import { UserValidateService } from './user-validate.service';
import { EventEmitterComponent } from './event-emitter/event-emitter.component';
import { EventEmitterChildComponent } from './event-emitter/event-emitter-child/event-emitter-child.component';
import { ProfileComponent } from './guard/profile/profile.component';
import { AboutComponent } from './guard/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    HomeComponent,
    RegComponent,
    EventEmitterComponent,
    EventEmitterChildComponent,
    ProfileComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [CarsService, UserValidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
