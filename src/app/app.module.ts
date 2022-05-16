import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';



// Pages
import { DetailWeatherComponent } from './pages/detail-weather/detail-weather.component';
import { MainComponent } from './pages/main/main.component';
// Components
import { InputCityComponent } from './components/input-city/input-city.component';
// Services
import { GeocodingService } from './services/geocoding.service';
import { WeatherService } from './services/weather.service';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { DescriptionCardComponent } from './components/description-card/description-card.component';
import { SidenavDescriptionComponent } from './components/sidenav-description/sidenav-description.component';
import { SidenavSearchLocationComponent } from './components/sidenav-search-location/sidenav-search-location.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    InputCityComponent,
    DetailWeatherComponent,
    WeatherCardComponent,
    DescriptionCardComponent,
    SidenavDescriptionComponent,
    SidenavSearchLocationComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule, 
    MatCardModule,
    MatProgressSpinnerModule
  ],
  providers: [
    GeocodingService,
    WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
