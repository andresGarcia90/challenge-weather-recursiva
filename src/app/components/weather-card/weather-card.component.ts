import { Component, Input, OnInit } from '@angular/core';
import { AllWeather, DailyWeather, Weather } from 'src/app/main.config';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {
  @Input() weather!: DailyWeather;
  public time = '';
  constructor() { }

  ngOnInit(): void {
    if ( this.weather ) {
      this.time = this._getTime(this.weather.dt);
      console.log('the day is '+  this.time);
    }
  }

  private _getTime(time: number): string {
    const newDate = new Date(time * 1000);
    const currentDay = new Date();
    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    if(newDate.toDateString() === currentDay.toDateString()){
      return 'today';
    }
    if (newDate.toDateString() === yesterday.toDateString()) {
      return 'yesterday';
    }
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const month = months[newDate.getMonth()];
    const date = newDate.getDate();
    const dateName = newDate.toLocaleDateString('en-US',{weekday: 'long'}).slice(0,3)
    return `${dateName}, ${date} ${month}`;
  }

}
