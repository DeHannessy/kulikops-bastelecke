import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ClimbingComponent } from './components/climbing/climbing.component';
import { KingOfThievesComponent } from './components/king-of-thieves/king-of-thieves.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClimbingComponent,
    KingOfThievesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
