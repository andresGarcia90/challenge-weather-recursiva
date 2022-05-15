import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, merge } from 'rxjs';
import { AllWeather, City, DailyWeather } from 'src/app/main.config';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-detail-weather',
  templateUrl: './detail-weather.component.html',
  styleUrls: ['./detail-weather.component.scss'],
})
export class DetailWeatherComponent implements OnInit {
  public city!: City;
  public lat = '';
  public lon = '';
  public currentWeather!: AllWeather;
  public historicalWeather: DailyWeather[] = [];
  public windTitle = 'Wind Status';
  public windData = '';
  public humidityTitle = 'Humidity';
  public humidityData = '';
  public visibilityTitle = 'Visibility';
  public visibilityData = '';
  public cloudsTitle = 'Clouds levels';
  public cloudsData = '';
  public loading = false;
  public optionDegree = true;
  public weatherSidebar = true;

  constructor(
    private activeRoute: ActivatedRoute,
    private weatherService: WeatherService
  ) {
    activeRoute.params.subscribe((params) => {
      if (params) {
        this.city = params['city'];
        this.lat = params['lat'];
        this.lon = params['lon'];
      }
    });
  }

  ngOnInit(): void {
    if (this.city) {
      this._getWeather(this.optionDegree ? 'metric' : 'imperial');
    }
  }

  private _getWeather(unit: string): void {
    this.loading = true;
      forkJoin({
        weather: this.weatherService.getWeather(this.city.county, unit),
        historicalWeather: this.weatherService.getHistoricalWeather(
          this.lat,
          this.lon,
          'current,minutely,hourly,alerts',
          unit
        ),
      }).subscribe((data) => {
        if (data.weather) {
          const detailWeather: AllWeather = data.weather;
          this.currentWeather = detailWeather;
          this.windData = detailWeather.wind.speed + ' m/s';
          this.humidityData = detailWeather.main.humidity + ' %';
          this.visibilityData = detailWeather.visibility + ' m';
          this.cloudsData = detailWeather.clouds.all + ' %';
          console.log(detailWeather.main);
        }
        if (data.historicalWeather) {
          const historicalWeather: DailyWeather[] = data.historicalWeather.daily;
          this.historicalWeather = historicalWeather.slice(0, 5);
          console.log(this.historicalWeather);
        }
        this.loading = false;
      });
  }

  switchSidenav(){
    this.weatherSidebar = !this.weatherSidebar;
  }

  changeDegree(){
    const unit = this.optionDegree ? 'metric' : 'imperial';
    this.optionDegree = !this.optionDegree;
    this._getWeather(unit);
  }
}
