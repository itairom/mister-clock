import { NgModule } from '@angular/core';
import { Routes, RouterModule, } from '@angular/router';
import { ClockAppComponent } from './pages/clock-app/clock-app.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: ClockAppComponent },
  // { path: 'clocks', component: ClockAppComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }

