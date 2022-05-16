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
    return of(
        {"coord":{"lon":-62.2724,"lat":-38.7196},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"base":"stations","main":{"temp":10.61,"feels_like":9.71,"temp_min":10.61,"temp_max":10.61,"pressure":1026,"humidity":76,"sea_level":1026,"grnd_level":1022},"visibility":10000,"wind":{"speed":6.43,"deg":206,"gust":12.03},"clouds":{"all":77},"dt":1652666835,"sys":{"country":"AR","sunrise":1652612674,"sunset":1652648789},"timezone":-10800,"id":3865086,"name":"Bahía Blanca","cod":200}
    );
    // return this.http.get(`${this.urlOpenWeatherCurrent}?q=${city}&units=${units}&APPID=${this.appid}`)
  }

  getHistoricalWeather(lat: string, lon: string, exclude = 'current,minutely,hourly,alerts', units = 'metric'): Observable<any> {
    return of(
        {"lat":-38.7196,"lon":-62.2724,"timezone":"America/Argentina/Buenos_Aires","timezone_offset":-10800,"daily":[{"dt":1652630400,"sunrise":1652612674,"sunset":1652648789,"moonrise":1652647740,"moonset":1652609700,"moon_phase":0.48,"temp":{"day":11.76,"min":6.04,"max":12.56,"night":10.61,"eve":10.85,"morn":6.08},"feels_like":{"day":10.66,"night":9.71,"eve":9.98,"morn":2.81},"pressure":1024,"humidity":64,"dew_point":5.07,"wind_speed":7.37,"wind_deg":216,"wind_gust":13.92,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":69,"pop":0.22,"uvi":2.38},{"dt":1652716800,"sunrise":1652699128,"sunset":1652735139,"moonrise":1652736540,"moonset":1652700720,"moon_phase":0.5,"temp":{"day":12.28,"min":9.87,"max":12.92,"night":10.19,"eve":10.04,"morn":10.57},"feels_like":{"day":11.1,"night":8.94,"eve":8.8,"morn":9.77},"pressure":1029,"humidity":59,"dew_point":4.34,"wind_speed":7.03,"wind_deg":185,"wind_gust":11.76,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":60,"pop":0.19,"uvi":2.58},{"dt":1652803200,"sunrise":1652785580,"sunset":1652821491,"moonrise":1652825940,"moonset":1652791800,"moon_phase":0.56,"temp":{"day":11.66,"min":9.93,"max":12.51,"night":11.33,"eve":9.96,"morn":9.96},"feels_like":{"day":10.71,"night":10.14,"eve":8.19,"morn":7.64},"pressure":1032,"humidity":70,"dew_point":6.37,"wind_speed":5.81,"wind_deg":153,"wind_gust":8.53,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":100,"pop":0,"uvi":1.99},{"dt":1652889600,"sunrise":1652872033,"sunset":1652907844,"moonrise":1652915880,"moonset":1652882640,"moon_phase":0.6,"temp":{"day":12.52,"min":6.75,"max":14.09,"night":9.71,"eve":11.74,"morn":7.03},"feels_like":{"day":11.34,"night":8.41,"eve":10.54,"morn":7.03},"pressure":1029,"humidity":58,"dew_point":4.57,"wind_speed":3.09,"wind_deg":139,"wind_gust":5.25,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":0,"pop":0,"uvi":2.63},{"dt":1652976000,"sunrise":1652958484,"sunset":1652994199,"moonrise":1653006420,"moonset":1652972940,"moon_phase":0.63,"temp":{"day":13.66,"min":7.24,"max":15.97,"night":10.84,"eve":12.86,"morn":7.24},"feels_like":{"day":12.44,"night":9.55,"eve":11.64,"morn":5.71},"pressure":1023,"humidity":52,"dew_point":3.99,"wind_speed":5.39,"wind_deg":338,"wind_gust":11.81,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":4,"pop":0,"uvi":2.54},{"dt":1653062400,"sunrise":1653044935,"sunset":1653080556,"moonrise":1653097200,"moonset":1653062520,"moon_phase":0.67,"temp":{"day":14.2,"min":9.01,"max":16.59,"night":12.8,"eve":13.86,"morn":9.2},"feels_like":{"day":12.98,"night":11.34,"eve":12.58,"morn":6.52},"pressure":1018,"humidity":50,"dew_point":4.04,"wind_speed":6.29,"wind_deg":319,"wind_gust":14.41,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":99,"pop":0,"uvi":0.17},{"dt":1653148800,"sunrise":1653131386,"sunset":1653166914,"moonrise":1653188040,"moonset":1653151500,"moon_phase":0.71,"temp":{"day":15.21,"min":8.93,"max":17.88,"night":13.9,"eve":14.94,"morn":9.11},"feels_like":{"day":13.91,"night":12.76,"eve":13.72,"morn":7.11},"pressure":1017,"humidity":43,"dew_point":2.63,"wind_speed":5.51,"wind_deg":320,"wind_gust":13.16,"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":34,"pop":0,"uvi":1},{"dt":1653235200,"sunrise":1653217835,"sunset":1653253274,"moonrise":0,"moonset":1653239940,"moon_phase":0.75,"temp":{"day":14.57,"min":11.1,"max":17.03,"night":11.1,"eve":13.34,"morn":12.53},"feels_like":{"day":13.78,"night":9.75,"eve":11.83,"morn":11.48},"pressure":1012,"humidity":65,"dew_point":8.06,"wind_speed":7.49,"wind_deg":256,"wind_gust":10.68,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":74,"pop":0.45,"rain":0.33,"uvi":1}]}
    );
    // return this.http.get(`${this.urlOpenWeatherOnecall}?lat=${lat}&lon=${lon}&exclude=${exclude}&units=${units}&APPID=${this.appid}`)
  }
}
