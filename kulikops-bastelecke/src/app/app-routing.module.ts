import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClimbingComponent } from './components/climbing/climbing.component';
import { HomeComponent } from './components/home/home.component';
import { KingOfThievesComponent } from './components/king-of-thieves/king-of-thieves.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'climbing', component: ClimbingComponent },
  { path: 'KoT', component: KingOfThievesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

