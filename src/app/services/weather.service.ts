import { Injectable } from '@angular/core';
import { concatMap, Observable, of, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }

  weather = {
    "coord": {
        "lon": -62.2724,
        "lat": -38.7196
    },
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 14.61,
        "feels_like": 13.17,
        "temp_min": 14.61,
        "temp_max": 14.61,
        "pressure": 1020,
        "humidity": 40,
        "sea_level": 1020,
        "grnd_level": 1017
    },
    "visibility": 10000,
    "wind": {
        "speed": 3.78,
        "deg": 235,
        "gust": 6.45
    },
    "clouds": {
        "all": 0
    },
    "dt": 1652558017,
    "sys": {
        "country": "AR",
        "sunrise": 1652526221,
        "sunset": 1652562440
    },
    "timezone": -10800,
    "id": 3865086,
    "name": "Bahía Blanca",
    "cod": 200
};


dailyWeather = {
  "lat": -38.7196,
  "lon": -62.2724,
  "timezone": "America/Argentina/Buenos_Aires",
  "timezone_offset": -10800,
  "daily": [
      {
          "dt": 1652544000,
          "sunrise": 1652526221,
          "sunset": 1652562440,
          "moonrise": 1652559360,
          "moonset": 1652518860,
          "moon_phase": 0.44,
          "temp": {
              "day": 14.51,
              "min": 6.4,
              "max": 14.85,
              "night": 9.03,
              "eve": 13.29,
              "morn": 6.73
          },
          "feels_like": {
              "day": 12.9,
              "night": 7.09,
              "eve": 11.85,
              "morn": 4.85
          },
          "pressure": 1020,
          "humidity": 34,
          "dew_point": -1.02,
          "wind_speed": 4.78,
          "wind_deg": 225,
          "wind_gust": 9.81,
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": 0,
          "pop": 0,
          "uvi": 2.87
      },
      {
          "dt": 1652630400,
          "sunrise": 1652612674,
          "sunset": 1652648789,
          "moonrise": 1652647740,
          "moonset": 1652609700,
          "moon_phase": 0.48,
          "temp": {
              "day": 13.4,
              "min": 6.25,
              "max": 13.8,
              "night": 11.2,
              "eve": 11.78,
              "morn": 6.25
          },
          "feels_like": {
              "day": 12.21,
              "night": 10.36,
              "eve": 10.79,
              "morn": 3.22
          },
          "pressure": 1024,
          "humidity": 54,
          "dew_point": 4.32,
          "wind_speed": 8.03,
          "wind_deg": 220,
          "wind_gust": 13.49,
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": 7,
          "pop": 0.26,
          "uvi": 2.43
      },
      {
          "dt": 1652716800,
          "sunrise": 1652699128,
          "sunset": 1652735139,
          "moonrise": 1652736540,
          "moonset": 1652700720,
          "moon_phase": 0.5,
          "temp": {
              "day": 13.06,
              "min": 9.15,
              "max": 13.16,
              "night": 9.58,
              "eve": 10.26,
              "morn": 10.55
          },
          "feels_like": {
              "day": 12.01,
              "night": 7.51,
              "eve": 9.09,
              "morn": 9.57
          },
          "pressure": 1029,
          "humidity": 61,
          "dew_point": 5.75,
          "wind_speed": 7.58,
          "wind_deg": 177,
          "wind_gust": 11.31,
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": 75,
          "pop": 0.29,
          "uvi": 2.29
      },
      {
          "dt": 1652803200,
          "sunrise": 1652785580,
          "sunset": 1652821491,
          "moonrise": 1652825940,
          "moonset": 1652791800,
          "moon_phase": 0.56,
          "temp": {
              "day": 11.78,
              "min": 8.74,
              "max": 12.94,
              "night": 8.74,
              "eve": 10.23,
              "morn": 9.66
          },
          "feels_like": {
              "day": 10.53,
              "night": 7.23,
              "eve": 9.06,
              "morn": 8.03
          },
          "pressure": 1031,
          "humidity": 58,
          "dew_point": 3.84,
          "wind_speed": 4.93,
          "wind_deg": 159,
          "wind_gust": 6.68,
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": 79,
          "pop": 0,
          "uvi": 2.63
      },
      {
          "dt": 1652889600,
          "sunrise": 1652872033,
          "sunset": 1652907844,
          "moonrise": 1652915880,
          "moonset": 1652882640,
          "moon_phase": 0.6,
          "temp": {
              "day": 11.98,
              "min": 6.48,
              "max": 13.84,
              "night": 8.8,
              "eve": 11.14,
              "morn": 6.48
          },
          "feels_like": {
              "day": 10.72,
              "night": 6.93,
              "eve": 10.01,
              "morn": 6.48
          },
          "pressure": 1029,
          "humidity": 57,
          "dew_point": 3.73,
          "wind_speed": 3.24,
          "wind_deg": 79,
          "wind_gust": 5.98,
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": 0,
          "pop": 0,
          "uvi": 2.63
      },
      {
          "dt": 1652976000,
          "sunrise": 1652958484,
          "sunset": 1652994199,
          "moonrise": 1653006420,
          "moonset": 1652972940,
          "moon_phase": 0.63,
          "temp": {
              "day": 12.45,
              "min": 6.23,
              "max": 15.22,
              "night": 9.57,
              "eve": 11.91,
              "morn": 6.23
          },
          "feels_like": {
              "day": 11.16,
              "night": 7.79,
              "eve": 10.62,
              "morn": 5.26
          },
          "pressure": 1027,
          "humidity": 54,
          "dew_point": 3.39,
          "wind_speed": 3.55,
          "wind_deg": 346,
          "wind_gust": 8.12,
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": 97,
          "pop": 0,
          "uvi": 0.18
      },
      {
          "dt": 1653062400,
          "sunrise": 1653044935,
          "sunset": 1653080556,
          "moonrise": 1653097200,
          "moonset": 1653062520,
          "moon_phase": 0.67,
          "temp": {
              "day": 13.68,
              "min": 7.44,
              "max": 16.15,
              "night": 10.91,
              "eve": 13.01,
              "morn": 7.44
          },
          "feels_like": {
              "day": 12.33,
              "night": 9.49,
              "eve": 11.67,
              "morn": 4.68
          },
          "pressure": 1025,
          "humidity": 47,
          "dew_point": 2.58,
          "wind_speed": 5.96,
          "wind_deg": 342,
          "wind_gust": 12.16,
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": 4,
          "pop": 0,
          "uvi": 1
      },
      {
          "dt": 1653148800,
          "sunrise": 1653131386,
          "sunset": 1653166914,
          "moonrise": 1653188040,
          "moonset": 1653151500,
          "moon_phase": 0.71,
          "temp": {
              "day": 15.55,
              "min": 11.45,
              "max": 17.93,
              "night": 14.42,
              "eve": 15.65,
              "morn": 11.6
          },
          "feels_like": {
              "day": 14.39,
              "night": 13.28,
              "eve": 14.55,
              "morn": 10.17
          },
          "pressure": 1021,
          "humidity": 47,
          "dew_point": 4.4,
          "wind_speed": 7.9,
          "wind_deg": 335,
          "wind_gust": 15.36,
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": 93,
          "pop": 0,
          "uvi": 1
      }
  ]
};

  getWeather(city: string, units = 'metric'): Observable<any> {
    return of(this.weather);
  }

  getHistoricalWeather(lat: string, lon: string, exclude = 'current,minutely,hourly,alerts', units = 'metric'): Observable<any> {
      return timer(3000)
      .pipe(concatMap(() =>  of(this.dailyWeather)));
      of(this.dailyWeather)
  }
}
