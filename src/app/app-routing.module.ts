import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailWeatherComponent } from './pages/detail-weather/detail-weather.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  { path: 'detail-weather', component: DetailWeatherComponent },
  { path: '', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
