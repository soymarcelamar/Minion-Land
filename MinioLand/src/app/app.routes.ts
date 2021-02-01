import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { MinionsComponent } from './components/minions/minions.component';
import { HomeComponent } from './components/shared/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'minions', component: MinionsComponent},
  { path: 'about', component: AboutComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
