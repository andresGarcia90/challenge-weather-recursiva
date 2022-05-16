import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concatMap, Observable, of, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  public urlOpenWeatherOnecall = 'https://api.openweathermap.org/data/2.5/onecall';
  public urlOpenWeatherCurrent = 'https://api.openweathermap.org/data/2.5/weather';
  private appid = '07b6b7be42f362556ce71ba7ea1f1a90';
  constructor(private http: HttpClient) { }

  getWeather(city: string, units = 'metric'): Observable<any> {
    return this.http.get(`${this.urlOpenWeatherCurrent}?q=${city}&units=${units}&APPID=${this.appid}`)
  }

  getHistoricalWeather(lat: string, lon: string, exclude = 'current,minutely,hourly,alerts', units = 'metric'): Observable<any> {
    return this.http.get(`${this.urlOpenWeatherOnecall}?lat=${lat}&lon=${lon}&exclude=${exclude}&units=${units}&APPID=${this.appid}`)
  }
}
